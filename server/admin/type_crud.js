const medical_equipments_type = require('../models').medical_equipments_type;
const type_basic_crud = require('./type_basic_crud');
const type_medium_crud = require('./type_medium_crud');
const type_high_crud = require('./type_high_crud');

module.exports = {
    create(req,res) {
        return medical_equipments_type
        .create({
            type_name: req.body.type_name,
            type_desc: req.body.type_desc,
        })
        .then(eq_type => {
            type_basic_crud.create(eq_type.id, req.body.basic);
            type_medium_crud.create(eq_type.id, req.body.medium);
            type_high_crud.create(eq_type.id, req.body.high);

            return res.status(201).send(eq_type);
        })
        .catch(error => res.status(400).send(error));
    },

    list(req,res) {
        return medical_equipments_type
        .findAll()
        .then(eq_types => res.status(200).send(eq_types))
        .catch(error => res.status(400).send(error));
    },

    retrieve(req,res) {
        return medical_equipments_type
        .findById(req.params.type_id)
        .then(eq_type => {
            if (!eq_type) {
                return res.status(404).send({
                    msg: 'Medical Equipment Type Not Found',
                });
            }
            return res.status(200).send(eq_type);
        })
        .catch(error => res.status(400).send(error));
    },

    update(req,res) {
        return medical_equipments_type
        .findById(req.params.type_id)
        .then(eq_type => {
            if (!eq_type) {
                return res.status(404).send({
                    msg: 'Medical Equipment Type Not Found',
                });
            }
            return eq_type
            .update({
                type_name: req.body.type_name || eq_type.type_name,
                type_desc: req.body.type_desc || eq_type.type_desc,
            })
            .then(() => res.status(200).send(eq_type))
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },

    destroy(req,res) {
        return medical_equipments_type
        .findById(req.params.type_id)
        .then(eq_type => {
            if (!eq_type) {
                return res.status(404).send({
                    msg: 'Medical Equipment Type Not Found',
                });
            }
            return eq_type
            .destroy()
            .then(() => res.status(204).send(eq_type))
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    }
};