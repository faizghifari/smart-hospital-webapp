const medical_equipments_type_medium_model = require('../models').medical_equipments_type_medium;
const models = require('../models');
const type_procedure_crud = require('./type_procedure_crud');
const facilities_crud = require('./type_procedure_crud');

module.exports = {
    create(type_id, data) {
        medical_equipments_type_medium_model
        .create({
            equipments_type_id: type_id,
            type_cost_params: data.type_cost_params,
            type_time_params: data.type_time_params,
            type_hr_req: data.type_hr_req,
        })
        .then(type_medium => {
            data.procedures.forEach(proc => {
                type_procedure_crud.create_medium(type_medium.id, proc.procedure);
            });

            data.facilities.forEach(facility => {
                facilities_crud.create_medium(type_medium.id, facility.facility);
            });
        })
        .catch(error => console.log(error));
    },

    list(req,res) {
        return medical_equipments_type_medium_model
        .findAll()
        .then(type_medium => res.status(200).send(type_medium))
        .catch(error => res.status(400).send(error));
    }, 

    list_details(req,res) {
        return medical_equipments_type_medium_model
        .findAll({
            include: [{
                model: models.medical_equipments_type_proc,
                as: 'procedures',
            }, {
                model: models.facilities,
            }]
        })
        .then(type_medium => res.status(200).send(type_medium))
        .catch(error => res.status(400).send(error));
    },

    retrieve(req,res) {
        return medical_equipments_type_medium_model
        .findById(req.params.id)
        .then(type_medium => {
            if (!type_medium) {
                return res.status(400).send({
                    msg: 'Medical Equipment Type Basic Not Found',
                });
            }
            return res.status(200).send(type_medium);
        })
        .catch(error => res.status(400).send(error));
    },

    retrieve_type(req,res) {
        return medical_equipments_type_medium_model
        .findOne({
            where: {
                equipments_type_id: req.params.type_id,
            }
        })
        .then(type_medium => {
            if (!type_medium) {
                return res.status(400).send({
                    msg: 'Medical Equipment Type Basic Not Found',
                });
            }
            return res.status(200).send(type_medium);
        })
        .catch(error => res.status(400).send(error));
    },

    retrieve_type_details(req,res) {
        return medical_equipments_type_medium_model
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
        .then(type_medium => {
            if (!type_medium) {
                return res.status(400).send({
                    msg: 'Medical Equipment Type Basic Not Found',
                });
            }
            return res.status(200).send(type_medium);
        })
        .catch(error => res.status(400).send(error));
    },

    destroy(medium_id) {
        medical_equipments_type_medium_model
        .findById(medium_id)
        .then(type_medium => {
            if (type_medium) {
                type_medium
                .destroy()
                .catch((error) => console.log(error));
            }
        })
        .catch(error => console.log(error));
    }
};