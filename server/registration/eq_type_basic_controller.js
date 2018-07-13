const medical_equipments_type_basic = require('../models').medical_equipments_type_basic;
const type_proc = require('./eq_type_procedure_controller');

module.exports = {
    create(type_id, data) {
        medical_equipments_type_basic
        .create({
            equipments_type_id: type_id,
            type_cost_params: data.type_cost_params,
            type_time_params: data.type_time_params,
            type_hr_req: data.type_hr_req,
        })
        .then(type_basic => {
            data.procedures.forEach(proc => {
                type_proc.create_basic(type_basic.id, proc.procedure);
            });
        })
        .catch(error => console.log(error));
    }
};