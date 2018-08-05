const spare_part_type_model = require('../models').spare_part_type;

module.exports = {
    create(req,res) {
        return spare_part_type_model
            .create({
                type_name: req.body.type_name,
                type_desc: req.body.type_desc
            })
            .then(part_type => res.status(201).send(part_type))
            .catch(error => res.status(400).send(error));
    },

    list(req,res) {
        return spare_part_type_model
            .findAll()
            .then(part_types => res.status(200).send(part_types))
            .catch(error => res.status(400).send(error));
    },

    retrieve_req(req,res) {
        return spare_part_type_model
            .findById(req.params.part_type_id)
            .then(part_type => res.status(200).send(part_type))
            .catch(error => res.status(400).send(error));
    },

    retrieve(spare_part_type_id) {
        return new Promise((resolve) => {
            spare_part_type_model
                .findById(spare_part_type_id)
                .then(part_type => {
                    resolve(part_type);
                })
                .catch(error => console.log(error));
        });
    },

    update(req,res) {
        return spare_part_type_model
            .findById(req.params.part_type_id)
            .then(part_type => {
                if (!part_type) {
                    return res.status(404).send({
                        msg: 'Spare Part Type Not Found'
                    });
                }
                return part_type
                    .update({
                        type_name: req.body.type_name || part_type.type_name,
                        type_desc: req.body.type_desc || part_type.type_desc
                    })
                    .then(() => res.status(200).send(part_type))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy(req,res) {
        return spare_part_type_model
            .findById(req.params.part_type_id)
            .then(part_type => {
                if (!part_type) {
                    return res.status(404).send({
                        msg: 'Spare Part Type Not Found'
                    });
                }
                return part_type
                    .destroy()
                    .then(() => res.status(204).send(part_type))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
};