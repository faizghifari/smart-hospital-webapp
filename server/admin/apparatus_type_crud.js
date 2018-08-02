const apparatus_type_model = require('../models').apparatus_type;

module.exports = {
    create(req,res) {
        return apparatus_type_model
            .create({
                type_name: req.body.type_name,
                type_desc: req.body.type_desc
            })
            .then(apparatus_type => res.status(201).send(apparatus_type))
            .catch(error => res.status(400).send(error));
    },

    list(req,res) {
        return apparatus_type_model
            .findAll()
            .then(apparatus_types => res.status(200).send(apparatus_types))
            .catch(error => res.status(400).send(error));
    },

    retrieve_req(req,res) {
        return apparatus_type_model
            .findById(req.params.apparatus_type_id)
            .then(apparatus_type => res.status(200).send(apparatus_type))
            .catch(error => res.status(400).send(error));
    },

    retrieve(apparatus_type_id) {
        return apparatus_type_id
            .findById(apparatus_type_id)
            .catch(error => console.log(error));
    },

    update(req,res) {
        return apparatus_type_model
            .findById(req.params.apparatus_type_id)
            .then(apparatus_type => {
                if (!apparatus_type) {
                    return res.status(400).send({
                        msg: 'Apparatus Type Not Found'
                    });
                }
                return apparatus_type
                    .update({
                        type_name: req.body.type_name || apparatus_type.type_name,
                        type_desc: req.body.type_desc || apparatus_type.type_desc
                    })
                    .then(() => res.status(200).send(apparatus_type))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy(req,res) {
        return apparatus_type_model
            .findById(req.params.apparatus_type_id)
            .then(apparatus_type => {
                if (!apparatus_type) {
                    return res.status(400).send({
                        msg: 'Apparatus Type Not Found'
                    });
                }
                return apparatus_type
                    .destroy()
                    .then(() => res.status(200).send(apparatus_type))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
};