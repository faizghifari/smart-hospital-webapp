const request = require('request');
const medical_equipments_productivity_model = require('../models').medical_equipments_productivity;
let productivity_io;

module.exports = {
    start: (io) => {
        productivity_io = io.of('/equipment/productivity/');

        productivity_io.on('connection', (client) => {
            console.log('Client Connected');

            client.on('disconnect', () => {
                console.log('Client Disconnected');
            });
        });
    },

    send_productivity(data) {
        productivity_io.emit('/' + data.hospital_id + '/productivity/' + data.equipment_id, data.productivity_level);
    },

    receive_usage(payload) {
        return new Promise((resolve,reject) => {
            medical_equipments_productivity_model
                .findOne({
                    where: {
                        equipment_id: payload.equipment_id
                    }
                })
                .then(async equipment_productivity => {
                    let usage = equipment_productivity.count_usage + 1;
                    let data = {
                        'hospital_id': payload.hospital_id,
                        'equipment_id': payload.equipment_id,
                        'count_usage': usage
                    };

                    let result = await module.exports.update(data.equipment_id, data);
                    resolve(result);
                })
                .catch(error => reject(error));
        });
    },

    calculate_productivity(data) {
        let productivity_level = -1;

        if (data.count_usage > 0.8*data.standard_usage) {
            productivity_level = 3;
        } else
        if (data.count_usage > 0.5*data.standard_usage) {
            productivity_level = 2;
        } else {
            productivity_level = 1;
        }

        return productivity_level;
    },

    create(equipment_id, data) {
        medical_equipments_productivity_model
            .create({
                equipment_id: equipment_id,
                count_usage: data.count_usage || 0,
                standard_usage: data.standard_usage
            })
            .catch(error => console.log(error));
    },

    update(equipment_id, data) {
        return new Promise((resolve,reject) => {
            medical_equipments_productivity_model
                .findOne({
                    where: {
                        equipment_id: equipment_id
                    }
                })
                .then(equipment_productivity => {
                    equipment_productivity
                        .update({
                            count_usage: data.count_usage,
                            standard_usage: data.standard_usage
                        })
                        .then(equipment_productivity_new => {
                            let productivity_level = module.exports.calculate_productivity(equipment_productivity_new);
                            let result = {
                                'hospital_id': data.hospital_id,
                                'equipment_id': equipment_id,
                                'productivity_level': productivity_level
                            };

                            if (productivity_level != -1) {
                                module.exports.update_productivity(result);
                                module.exports.send_productivity(result);
                            }

                            resolve(equipment_productivity_new);
                        })
                        .catch((error) => reject(error));
                })
                .catch(error => reject(error));
        });
    },

    update_productivity(data) {
        let payload = {
            'current_productivity': data.productivity_level
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