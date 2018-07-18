const medical_equipments_model = require('../models').medical_equipments;
const medical_equipments_safety_model = require('../models').medical_equipments_safety;

module.exports = {
    calculate_safety(equipment_id) {
        medical_equipments_safety_model
        .findOne({
            where: {
                equipment_id: equipment_id
            }
        })
        .then(equipment_safety => {
            let day_factor = 24*60*60*1000;
            let safety_level = 0;
            if ((Date.now - equipment_safety.last_maintenance_date) / 
                day_factor < equipment_safety.standard_maintenance) {
                safety_level = 1;
            } else
            if ((Date.now - equipment_safety.last_maintenance_date) / 
                day_factor == equipment_safety.standard_maintenance) {
                safety_level = 2;
            } else {
                safety_level = 3;
            }

            return safety_level;
        })
        .catch(error => console.log(error));
    },

    calculate_age(equipment_id) {
        medical_equipments_model
        .findById(equipment_id)
        .then(equipment => {
            let day_factor = 24*60*60*1000;
            let age = (Date.now - equipment.purchase_date) / day_factor;

            return age;
        })
        .catch(error => console.log(error));
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
                equipment_age: this.calculate_age(equipment_id),
                last_maintenance_date: data.last_maintenance_date,
                standard_maintenance: data.standard_maintenance || equipment_safety.standard_maintenance,
                is_reported: data.is_reported || equipment_safety.is_reported
            })
            .catch((error) => console.log(error));
        })
        .catch(error => console.log(error));
    }
};