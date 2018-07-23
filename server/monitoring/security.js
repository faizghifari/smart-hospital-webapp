const medical_equipments_model = require('../models').medical_equipments;
const medical_equipments_security_model = require('../models').medical_equipments_security;
const rooms_model = require('../models').rooms;

// const io = require('../../app').io;

// const pos_io = io.of('/equipment/position/');
// const security_io = io.of('/equipment/security/');

// pos_io.on('connection', (client) => {
//     console.log('Client Connected');

//     client.on('disconnect', () => {
//         console.log('Client Disconnected');
//     });
// });

// security_io.on('connection', (client) => {
//     console.log('Client Connected');

//     client.on('disconnect', () => {
//         console.log('Client Disconnected');
//     })
// });

module.exports = {
    start: (io) => {
        const pos_io = io.of('/equipment/position/');
        const security_io = io.of('/equipment/security/');

        pos_io.on('connection', (client) => {
            console.log('Client Connected');

            client.on('disconnect', () => {
                console.log('Client Disconnected');
            });
        });

        security_io.on('connection', (client) => {
            console.log('Client Connected');

            client.on('disconnect', () => {
                console.log('Client Disconnected');
            })
        });
    },

    send_raw_pos(data) {
        pos_io.emit('position/' + data.equipment_id, data);
    },

    send_security(equipment_id, security_level) {
        security_io.emit('security/' + equipment_id, security_level);
    },

    receive_raw_pos(req,res) {
        if (req.body.latitude && req.body.longitude) {
            let object = {
                "equipment_id": req.params.equipment_id,
                "latitude": req.body.latitude,
                "longitude": req.body.longitude
            };
            let data = JSON.stringify(object);

            let new_room_id = this.calculate_raw_pos(data);
            if (new_room_id != -1) {
                data.room_id = new_room_id
            };

            this.send_raw_pos(data);
            this.update(data.equipment_id, data);

            return res.status(200).send(data);
        } else {
            return res.status(400).send({
                msg: 'Position is not received'
            });
        }
    },

    receive_pic(req,res) {
        if (req.body.user_id) {
            let object = {
                "equipment_id": req.params.equipment_id,
                "pic_id": req.body.user_id
            }
            let data = JSON.stringify(object);

            this.update(data.equipment_id, data);

            return res.status(200).send(data);
        } else {
            return res.status(400).send({
                msg: 'User info is not received'
            });
        }
    },

    calculate_raw_pos(data) {
        let room_index = -1;

        rooms_model
        .findAll()
        .then(rooms => {
            room_index = rooms.findIndex(room => {
                return ((data.latitude > room.latitude_low) && (data.latitude < room.latitude_high)) &&
                ((data.longitude > room.longitude_low) && (data.longitude < room.longitude_high));
            })
        })
        .catch(error => console.log(error));

        let room_id = rooms[room_index].room_id;

        return room_id;
    },

    calculate_security(data) {
        medical_equipments_model
        .findById(data.equipment_id)
        .then(equipment => {
            let security_level = -1;
            if ((equipment.room_id != data.room_id) && ((equipment.pic_id != data.pic_id) && 
            (equipment.pic_usage_id != data.pic_id))) {
                security_level = 1;
            } else
            if ((equipment.room_id == data.room_id) && ((equipment.pic_id == data.pic_id) || 
            (equipment.pic_usage_id == data.pic_id))) {
                security_level = 3;
            } else {
                security_level = 2;
            }

            return security_level;
        })
        .catch(error => console.log(error));
    },

    create(equipment_id, data) {
        medical_equipments_security_model
        .create({
            equipment_id: equipment_id,
            is_room_locked: data.is_room_locked,
            room_id: data.room_id,
            pic_id: data.pic_id
        })
        .catch(error => console.log(error));
    },

    update(equipment_id, data) { // need to add security history when onRoomChange || onPicChange
        medical_equipments_security_model
        .findOne({
            where: {
                equipment_id: equipment_id
            }
        })
        .then(equipment_security => {
            equipment_security
            .update({
                is_room_locked: data.is_room_locked || equipment_security.is_room_locked,
                room_id: data.room_id || equipment_security.room_id,
                pic_id: data.pic_id || equipment_security.pic_id
            })
            .then(equipment_security_new => {
                let security_level = this.calculate_security(equipment_security_new);

                if (security_level != -1) {
                    this.update_security(equipment_id, security_level);
                    this.send_security(equipment_id, security_level);
                }
            })
            .catch((error) => console.log(error));
        })
        .catch(error => console.log(error));
    },

    update_security(equipment_id, security_level) {
        medical_equipments_model
        .findById(equipment_id)
        .then(medical_equipment => {
            if (!medical_equipment) {
                console.log("Medical Equipment Not Found");
            }
            medical_equipment
            .update({
                current_security: security_level
            })
            .catch((error) => console.log(error));
        })
        .catch(error => console.log(error));
    }
};