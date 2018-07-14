const medical_equipments_type_medium = require('../models').medical_equipments_type_medium;
const type_proc = require('./eq_type_procedure_controller');
const facilities = require('./facilities_controller');

module.exports = {
    create(type_id,data) {
        medical_equipments_type_medium
        .create({
            equipments_type_id: type_id,
            type_cost_params: data.type_cost_params,
            type_time_params: data.type_time_params,
            type_hr_req: data.type_hr_req,
        })
        .then(type_medium => {
            data.procedures.forEach(proc => {
                type_proc.create_medium(type_medium.id, proc.procedure);
            });

            data.facilities.forEach(facility => {
                facilities.create_medium(type_medium.id, facility.facility);
            });
        })
        .catch(error => console.log(error));
    }
};