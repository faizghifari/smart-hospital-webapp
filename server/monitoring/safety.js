const cron = require('node-cron');

const medical_equipments_model = require('../models').medical_equipments;
const medical_equipments_safety_model = require('../models').medical_equipments_safety;

// const io = require('../../app').io;

// const safety_io = io.of('/equipment/safety/');

// safety_io.on('connection', (client) => {
//     console.log('Client Connected');

//     client.on('disconnect', () => {
//         console.log('Client Disconnected');
//     });
// });

let update_age = cron.schedule('* 0 * * *', () => {
    medical_equipments_safety_model
    .findAll()
    .then(equipments_safety => {
        equipments_safety.forEach(equipment_safety => {
            let age = equipment_safety.equipment_age + 1;
            let object = {
                "equipment_age": age,
                "last_maintenance_date": equipment_safety.last_maintenance_date,
                "standard_maintenance": equipment_safety.standard_maintenance
            };
            let data = JSON.stringify(object);

            this.update(equipment_safety.equipment_id, data);
        });
    })
    .catch(error => console.log(error));
})

module.exports = {
    start: (io) => {
        const safety_io = io.of('/equipment/safety/');

        safety_io.on('connection', (client) => {
            console.log('Client Connected');

            client.on('disconnect', () => {
                console.log('Client Disconnected');
            });
        });
    },

    send_safety(equipment_id, safety_level) {
        safety_io.emit('safety/' + equipment_id, safety_level);
    },

    receive_mt(req,res) {
        if (req.body.last_maintenance_date) {
            let object = {
                "equipment_id": req.params.equipment_id,
                "last_maintenance_date": req.body.last_maintenance_date
            }
            let data = JSON.stringify(object);

            this.update(data.equipment_id, data);

            return res.status(200).send(data);
        } else {
            return res.status(400).send({
                msg: 'Maintenance date is not received'
            })
        }
    },

    receive_report(req,res) {
        if (req.body.is_reported) {
            let object = {
                "equipment_id": req.params.equipment_id,
                "is_reported": req.body.is_reported
            }
            let data = JSON.stringify(object);

            this.update(data.equipment_id, data);

            return res.status(200).send(data);
        } else {
            return res.status(400).send({
                msg: 'Maintenance date is not received'
            })
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

    update(equipment_id, data) {
        medical_equipments_safety_model
        .findOne({
            where: {
                equipment_id: equipment_id
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
                let safety_level = this.calculate_safety(equipment_safety_new);

                if (safety_level != -1) {
                    this.update_safety(equipment_id, safety_level);
                    this.send_safety(equipment_id, safety_level);
                }
            })
            .catch((error) => console.log(error));
        })
        .catch(error => console.log(error));
    },

    update_safety(equipment_id, safety_level) {
        medical_equipments_model
        .findById(equipment_id)
        .then(medical_equipment => {
            if (!medical_equipment) {
                console.log("Medical Equipment Not Found");
            }
            medical_equipment
            .update({
                current_safety: safety_level
            })
            .catch((error) => console.log(error));
        })
        .catch(error => console.log(error));
    }
};