const medical_equipments_model = require('../models').medical_equipments;
const medical_equipments_safety_model = require('../models').medical_equipments_safety;

module.exports = {
    calculate_safety(equipment_id) {
        medical_equipments_safety_model
        .findById(equipment_id)
        .then(medical_equipment => {
            let day_factor = 24*60*60*1000;
            if ((Date.now - last_maintenance_date) / day_factor < standard_maintenance) {
                return 1;
            } else
            if ((Date.now - last_maintenance_date) / day_factor == standard_maintenance) {
                return 2;
            } else {
                return 3;
            }
        })
        .catch(error => console.log(error));
    },

    calculate_age(equipment_id) {
        let equipment = medical_equipments_model
        .findById(equipment_id)
        .then(medical_equipment => {
            let day_factor = 24*60*60*1000;
            let age = (Date.now - medical_equipment.purchase_date) / day_factor;

            return age;
        })
        .catch(error => console.log(error));
    },

    create(equipment_id, data) { // perlu tambah tanggal masuk + lifetime kesini
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
        .then(medical_equipment_safety => {
            medical_equipment_safety
            .update({
                equipment_age: this.calculate_age(equipment_id),
                last_maintenance_date: data.last_maintenance_date,
                standard_maintenance: data.standard_maintenance || medical_equipment_safety.standard_maintenance,
                is_reported: data.is_reported || medical_equipment_safety.is_reported
            })
            .catch((error) => console.log(error));
        })
        .catch(error => console.log(error));
    }
};