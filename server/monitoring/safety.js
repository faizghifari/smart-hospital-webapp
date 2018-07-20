const cron = require('node-cron');

const medical_equipments_model = require('../models').medical_equipments;
const medical_equipments_safety_model = require('../models').medical_equipments_safety;

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
    calculate_safety(data) {
        let day_factor = 24*60*60*1000;
        let safety_level = 0;
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
            .then(() => {
                let safety_level = this.calculate_safety(equipment_safety);

                this.update_safety(equipment_id, safety_level);
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