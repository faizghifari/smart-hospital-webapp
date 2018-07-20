const medical_equipments_model = require('../models').medical_equipments;
const medical_equipments_security_model = require('../models').medical_equipments_security;
const io = require('../../app').io;

const pos_io = io.of('/equipment/position/');

pos_io.on('connection', (client) => {
    console.log('Client Connected');

    client.on('disconnect', () => {
        console.log('Client Disconnected');
    });
});

module.exports = {
    send_raw_pos(data) {
        pos_io.emit('position/' + data.equipment_id, data);
    },

    receive_raw_pos(req,res) {
        if (req.body.pos_x && req.body.pos_y) {
            let object = {
                "equipment_id": req.body.equipment_id,
                "pos_x": req.body.pos_x,
                "pos_y": req.body.pos_y
            };
            let data = JSON.stringify(object);

            let new_room_id = this.calculate_raw_pos(data);
            data.room_id = new_room_id

            this.send_raw_pos(data);
            this.update(data.equipment_id, data);

            return res.status(200).send(data);
        } else {
            return res.status(400).send({
                msg: 'Position is not received'
            })
        }
    },

    calculate_raw_pos(data) {
        // entah gimana ngitungnya dah, room harus punya threshold atas-bawah x sama y
        let room_id = 1;

        return room_id;
    },

    calculate_security(equipment_id, data) {
        medical_equipments_security_model
        .findOne({
            where: {
                equipment_id: equipment_id
            }
        })
        .then(equipment_security => {
            let security_level = 0;
            if ((equipment_security.room_id != data.room_id) &&
            (equipment_security.pic_id != pic_id)) {
                security_level = 1;
            } else
            if ((equipment_security.room_id == data.room_id) && 
            ((equipment_security.pic_id == data.pic_id) || 
            (equipment_security.pic_id == data.pic_usage_id))) {
                security_level = 3;
            } else {
                security_level = 2;
            }
            return security_level;
        })
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

    update(equipment_id, data) {
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
            .catch((error) => console.log(error));
        })
        .catch(error => console.log(error));
    }
};