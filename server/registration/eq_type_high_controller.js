const medical_equipments_type_high = require('../models').medical_equipments_type_high;
const type_proc = require('./eq_type_procedure_controller');

module.exports = {
    create(type_id,data) {
        medical_equipments_type_high
        .create({
            equipments_type_id: type_id,
            type_cost_params: data.type_cost_params,
            type_time_params: data.type_time_params,
            type_hr_req: data.type_hr_req,
        })
        .then(type_high => {
            data.procedures.forEach(proc => {
                type_proc.create_high(type_high.id, proc.procedure);
            });
        })
        .catch(error => console.log(error));
    }
};