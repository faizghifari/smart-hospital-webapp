const request = require('request');

const medical_equipments_safety_model = require('../models').medical_equipments_safety;

let safety_io;

module.exports = {
    start: (io) => {
        safety_io = io.of('/equipment/safety/');

        safety_io.on('connection', (client) => {
            console.log('Client Connected');

            client.on('disconnect', () => {
                console.log('Client Disconnected');
            });
        });
    },

    send_safety(data) {
        safety_io.emit('/' + data.hospital_id + '/safety/' + data.equipment_id, data.safety_level);
    },

    receive_mt(req,res) {
        if (req.body.last_maintenance_date) {
            let data = {
                'hospital_id': req.params.hospital_id,
                'equipment_id': req.params.equipment_id,
                'last_maintenance_date': req.body.last_maintenance_date
            };

            module.exports.update(data);

            let data_stringified = JSON.stringify(data);
            return res.status(200).send(data_stringified);
        } else {
            return res.status(400).send({
                msg: 'Maintenance date is not received'
            });
        }
    },

    receive_report(req,res) {
        if (req.body.is_reported) {
            let data = {
                'hospital_id': req.params.hospital_id,
                'equipment_id': req.params.equipment_id,
                'is_reported': req.body.is_reported
            };

            module.exports.update(data);

            let data_stringified = JSON.stringify(data);
            return res.status(200).send(data_stringified);
        } else {
            return res.status(400).send({
                msg: 'Maintenance date is not received'
            });
        }
    },

    calculate_safety(data) {
        let day_factor = 24*60*60*1000;
        let safety_level = -1;
        if ((Date.now - data.last_maintenance_date) / 
            day_factor < data.standard_maintenance) {
            safety_level = 1;
        } else
        if ((Date.now - data.last_maintenance_date) / 
            day_factor == data.standard_maintenance) {
            safety_level = 2;
        } else {
            safety_level = 3;
        }

        return safety_level;
    },

    create(equipment_id, data) {
        medical_equipments_safety_model
            .create({
                equipment_id: equipment_id,
                equipment_age: data.equipment_age,
                last_maintenance_date: data.last_maintenance_date,
                standard_maintenance: data.standard_maintenance,
                is_reported: data.is_reported
            })
            .catch(error => console.log(error));
    },

    update(data) {
        medical_equipments_safety_model
            .findOne({
                where: {
                    equipment_id: data.equipment_id
                }
            })
            .then(equipment_safety => {
                equipment_safety
                    .update({
                        equipment_age: data.equipment_age || equipment_safety.equipment_age,
                        last_maintenance_date: data.last_maintenance_date || equipment_safety.last_maintenance_date,
                        standard_maintenance: data.standard_maintenance || equipment_safety.standard_maintenance,
                        is_reported: data.is_reported || equipment_safety.is_reported
                    })
                    .then(equipment_safety_new => {
                        let safety_level = module.exports.calculate_safety(equipment_safety_new);
                        let result = {
                            'hospital_id': data.hospital_id,
                            'equipment_id': data.equipment_id,
                            'safety_level': safety_level
                        };

                        if (safety_level != -1) {
                            module.exports.update_safety(result);
                            module.exports.send_safety(result);
                        }
                    })
                    .catch((error) => console.log(error));
            })
            .catch(error => console.log(error));
    },

    update_safety(data) {
        let payload = {
            'current_safety': data.safety_level
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