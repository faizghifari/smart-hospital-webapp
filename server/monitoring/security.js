const request = require('request');

const medical_equipments_model = require('../models').medical_equipments;
const medical_equipments_security_model = require('../models').medical_equipments_security;
const rooms_model = require('../models').rooms;

const security_history = require('./security_history');

let pos_io;
let security_io;

module.exports = {
    start: (io) => {
        pos_io = io.of('/equipment/position/');
        security_io = io.of('/equipment/security/');

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
            });
        });
    },

    get_room_id(data) {
        return new Promise((resolve) => {
            rooms_model
                .findAll({
                    where: {
                        hospital_id: data.hospital_id
                    }
                })
                .then(rooms => {
                    rooms.forEach(room => { // other than foreach
                        if (((data.latitude > room.latitude_low) && (data.latitude < room.latitude_high)) &&
                        ((data.longitude > room.longitude_low) && (data.longitude < room.longitude_high))) {
                            const room_id = room.id;
                            resolve(room_id);
                        } else {
                            const room_id = -1;
                            resolve(room_id);
                        }
                    });
                })
                .catch(error => console.log(error));
        });
    },

    get_security_level(data) {
        return new Promise((resolve) => {
            medical_equipments_model
                .findById(data.equipment_id)
                .then(equipment => {
                    let security_level = -1;
                    if ((equipment.room_id != data.room_id) && ((equipment.pic_id != data.pic_id) && 
            (equipment.pic_usage_id != data.pic_id))) {
                        security_level = 1;
                        resolve(security_level);
                    } else
                    if ((equipment.room_id == data.room_id) && ((equipment.pic_id == data.pic_id) || 
            (equipment.pic_usage_id == data.pic_id))) {
                        security_level = 3;
                        resolve(security_level);
                    } else {
                        security_level = 2;
                        resolve(security_level);
                    }
                })
                .catch(error => console.log(error));
        });
    },

    async calculate_raw_pos(data) {
        let room_id = await module.exports.get_room_id(data);
        return room_id;
    },

    async calculate_security(data) {
        let security_level = await module.exports.get_security_level(data);
        return security_level;
    },

    send_raw_pos(data) {
        pos_io.emit('/' + data.hospital_id + '/position/' + data.equipment_id, data);
    },

    send_security(data) {
        security_io.emit('/' + data.hospital_id + '/security/' + data.equipment_id, data.security_level);
    },

    async receive_raw_pos(req,res) {
        if (req.body.latitude && req.body.longitude) {
            let data = {
                'hospital_id': req.params.hospital_id,
                'equipment_id': req.params.equipment_id,
                'latitude': req.body.latitude,
                'longitude': req.body.longitude,
                'receive_type': 'pos'
            };

            let new_room_id = await module.exports.calculate_raw_pos(data);
            if (new_room_id != -1) {
                data.room_id = new_room_id;
            } else {
                data.room_id = null;
            }

            module.exports.update(data);
            module.exports.send_raw_pos(data);

            let data_stringified = JSON.stringify(data);
            return res.status(200).send(data_stringified);
        } else {
            return res.status(400).send({
                msg: 'Position is not received'
            });
        }
    },

    receive_pos(req,res) {
        let data = {
            'hospital_id': req.params.hospital_id,
            'equipment_id': req.params.equipment_id,
            'room_id': req.body.room_id,
            'receive_type': 'pos'
        };

        module.exports.update(data);

        let data_stringified = JSON.stringify(data);
        return res.status(200).send(data_stringified);
    },

    receive_pic(req,res) {
        let data = {
            'hospital_id': req.params.hospital_id,
            'equipment_id': req.params.equipment_id,
            'pic_id': req.body.user_id,
            'receive_type': 'pic'
        };

        module.exports.update(data);

        let data_stringified = JSON.stringify(data);
        return res.status(200).send(data_stringified);
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

    update(data) {
        medical_equipments_security_model
            .findOne({
                where: {
                    equipment_id: data.equipment_id
                }
            })
            .then(equipment_security => {
                let id_room = equipment_security.room_id;
                let id_pic = equipment_security.pic_id;
                if (data.receive_type == 'pos') {
                    id_room = data.room_id;
                } else {
                    id_pic = data.pic_id;
                }

                if ((id_room != equipment_security.room_id) || (id_pic != equipment_security.pic_id)) {
                    let payload = {
                        'security_id': equipment_security.id,
                        'equipment_id': equipment_security.equipment_id,
                        'room_id': id_room,
                        'pic_id': id_pic
                    };

                    security_history.create(payload);
                }

                equipment_security
                    .update({
                        is_room_locked: data.is_room_locked || equipment_security.is_room_locked,
                        room_id: id_room,
                        pic_id: id_pic
                    })
                    .then(async equipment_security_new => {
                        let security_level = await module.exports.calculate_security(equipment_security_new);
                        let result = {
                            'hospital_id': data.hospital_id,
                            'equipment_id': data.equipment_id,
                            'security_level': security_level
                        };

                        if (security_level != -1) {
                            module.exports.update_security(result);
                            module.exports.send_security(result);
                        }
                    })
                    .catch((error) => console.log(error));
            })
            .catch(error => console.log(error));
    },

    update_security(data) {
        let payload = {
            'current_security': data.security_level
        };
        const url = 'http://localhost:3002/' + data.hospital_id + '/' + data.equipment_id + '/equipment/';
        
        request.put({
            url: url,
            json: payload
        }, (error, response, body) => {
            console.log('error:', error);
            console.log('status_code:', response && response.statusCode);
            console.log('body:', body);
        });
    }
};