const medical_equipments_type_proc = require('../models').medical_equipments_type_proc;

module.exports = {
    create_basic(basic_id, data) {
        medical_equipments_type_proc
        .create({
            equipments_type_basic_id: basic_id,
            proc_sequence_num: data.proc_sequence_num,
            proc_type: data.proc_type,
            proc_action: data.proc_action,
        })
        .catch(error => console.log(error));
    },

    create_medium(medium_id, data) {
        medical_equipments_type_proc
        .create({
            equipments_type_medium_id: medium_id,
            proc_sequence_num: data.proc_sequence_num,
            proc_type: data.proc_type,
            proc_action: data.proc_action,
        })
        .catch(error => console.log(error));
    },

    create_high(high_id, data) {
        medical_equipments_type_proc
        .create({
            equipments_type_high_id: high_id,
            proc_sequence_num: data.proc_sequence_num,
            proc_type: data.proc_type,
            proc_action: data.proc_action,
        })
        .catch(error => console.log(error));
    }
};