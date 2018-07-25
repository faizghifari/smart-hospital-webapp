const request = require('request');

const medical_equipments_model = require('../models').medical_equipments;
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

    send_productivity(equipment_id, productivity_level) {
        productivity_io.emit('productivity/' + equipment_id, productivity_level);
    },

    receive_usage(req,res) {
        medical_equipments_productivity_model
        .findOne({
            where: {
                equipment_id: req.params.equipment_id
            }
        })
        .then(equipment_productivity => {
            let usage = equipment_productivity.count_usage + 1;
            let data = {
                "equipment_id": req.params.equipment_id,
                "count_usage": usage
            }

            this.update(data.equipment_id, data);

            let data_stringified = JSON.stringify(data);
            return res.status(200).send(data_stringified);
        })
        .catch(error => res.status(400).send(error));
    },

    calculate_productivity(data) {
        let productivity_level = -1;

        if (data.count_usage > data.standard_usage) {
            productivity_level = 3;
        } else
        if (data.count_usage > 0) {
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
                let productivity_level = this.calculate_productivity(equipment_productivity_new);

                if (productivity_level != -1) {
                    this.update_productivity(equipment_id, productivity_level);
                    this.send_productivity(equipment_id, productivity_level);
                }
            })
            .catch((error) => console.log(error));
        })
        .catch(error => console.log(error));
    },

    update_productivity(equipment_id, productivity_level) {
        let data = {
            "current_productivity": productivity_level
        }
        const url = "http://localhost:3002/api/equipment/" + equipment_id;

        request.put({
            url: url,
            json: data
        }, (error, response, body) => {
            console.log('error:', error);
            console.log('status_code:', response && response.statusCode);
            console.log('body:', body);
        });
    //     medical_equipments_model
    //     .findById(equipment_id)
    //     .then(medical_equipment => {
    //         if (!medical_equipment) {
    //             console.log("Medical Equipment Not Found");
    //         }
    //         medical_equipment
    //         .update({
    //             current_productivity: productivity_level
    //         })
    //         .catch((error) => console.log(error));
    //     })
    //     .catch(error => console.log(error));
    }
};