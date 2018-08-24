const security_history_model = require('../models').medical_equipments_security_history;

module.exports = {
    create(data) {
        return security_history_model
            .create({
                security_desc: data.security_desc,
                pic_id: data.pic_id,
                room_id: data.room_id,
                equipment_id: data.equipment_id,
                security_id: data.security_id
            });
    }
};