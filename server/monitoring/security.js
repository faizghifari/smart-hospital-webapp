const medical_equipments_model = require('../models').medical_equipments;
const medical_equipments_security_model = require('../models').medical_equipments_security;

module.exports = {
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