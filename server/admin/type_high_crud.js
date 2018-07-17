const medical_equipments_type_high_model = require('../models').medical_equipments_type_high;
const type_procedure_crud = require('./type_procedure_crud');
const facilities_crud = require('./facilities_crud');

module.exports = {
    create(type_id, data) {
        medical_equipments_type_high_model
        .create({
            equipments_type_id: type_id,
            type_cost_params: data.type_cost_params,
            type_time_params: data.type_time_params,
            type_hr_req: data.type_hr_req,
        })
        .then(type_high => {
            data.procedures.forEach(proc => {
                type_procedure_crud.create_high(type_high.id, proc.procedure);
            });

            data.facilities.forEach(facility => {
                facilities_crud.create_high(type_high.id, facility.facility);
            })
        })
        .catch(error => console.log(error));
    },

    list(req,res) {
        return medical_equipments_type_high_model
        .findAll()
        .then(type_high => res.status(200).send(type_high))
        .catch(error => res.status(400).send(error));
    }, 

    list_details(req,res) {
        return medical_equipments_type_high_model
        .findAll({
            include: [{
                model: models.medical_equipments_type_proc,
                as: 'procedures',
            }, {
                model: models.facilities,
            }]
        })
        .then(type_high => res.status(200).send(type_high))
        .catch(error => res.status(400).send(error));
    },

    retrieve(req,res) {
        return medical_equipments_type_high_model
        .findById(req.params.id)
        .then(type_high => {
            if (!type_high) {
                return res.status(400).send({
                    msg: 'Medical Equipment Type Basic Not Found',
                });
            }
            return res.status(200).send(type_high);
        })
        .catch(error => res.status(400).send(error));
    },

    retrieve_type(req,res) {
        return medical_equipments_type_high_model
        .findOne({
            where: {
                equipments_type_id: req.params.type_id,
            }
        })
        .then(type_high => {
            if (!type_high) {
                return res.status(400).send({
                    msg: 'Medical Equipment Type Basic Not Found',
                });
            }
            return res.status(200).send(type_high);
        })
        .catch(error => res.status(400).send(error));
    },

    retrieve_type_details(req,res) {
        return medical_equipments_type_high_model
        .findOne({
            where: {
                equipments_type_id: req.params.type_id,
            },
            include: [{
                model: models.medical_equipments_type_proc,
                as: 'procedures',
            }, {
                model: models.facilities,
            }]
        })
        .then(type_high => {
            if (!type_high) {
                return res.status(400).send({
                    msg: 'Medical Equipment Type Basic Not Found',
                });
            }
            return res.status(200).send(type_high);
        })
        .catch(error => res.status(400).send(error));
    },

    destroy(high_id) {
        medical_equipments_type_high_model
        .findById(high_id)
        .then(type_high => {
            if (type_high) {
                type_high
                .destroy()
                .catch((error) => console.log(error));
            }
        })
        .catch(error => console.log(error));
    }
};