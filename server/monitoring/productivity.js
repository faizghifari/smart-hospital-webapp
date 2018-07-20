const medical_equipments_model = require('../models').medical_equipments;
const medical_equipments_productivity_model = require('../models').medical_equipments_productivity;

module.exports = {
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
            .catch((error) => console.log(error));
        })
        .catch(error => console.log(error));
    }
};