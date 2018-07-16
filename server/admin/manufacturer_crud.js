const manufacturers_model = require('../models').manufacturers;

module.exports = {
    create(req,res) {
        return manufacturers_model
        .create({
            manufacturers_name: req.body.manufacturers_name,
            manufacturers_desc: req.body.manufacturers_desc,
            manufacturers_sn: req.body.manufacturers_sn,
        })
        .then(manufacturer => res.status(201).send(manufacturer))
        .catch(error => res.status(400).send(error));
    },

    list(req,res) {
        return manufacturers_model
        .findAll()
        .then(manufacturers => res.status(200).send(manufacturers))
        .catch(error => res.status(400).send(error));
    },

    retrieve(req,res) {
        return manufacturers_model
        .findById(req.params.manufacturer_id)
        .then(manufacturer => {
            if (!manufacturer) {
                return res.status(400).send({
                    msg: 'Manufacturer Not Found',
                });
            }
            return res.status(200).send(manufacturer);
        })
        .catch(error => res.status(400).send(error));
    },

    update(req,res) {
        return manufacturers_model
        .findById(req.params.manufacturer_id)
        .then(manufacturer => {
            if (!manufacturer) {
                return res.status(400).send({
                    msg: 'Manufacturer Not Found',
                });
            }
            return manufacturer
            .update({
                manufacturers_name: req.body.manufacturers_name || manufacturer.manufacturers_name,
                manufacturers_desc: req.body.manufacturers_desc || manufacturer.manufacturers_desc,
                manufacturers_sn: req.body.manufacturers_sn || manufacturer.manufacturers_sn,
            })
            .then(() => res.status(200).send(manufacturer))
            .catch((error) => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    },

    destroy(req,res) {
        return manufacturers_model
        .findById(req.params.manufacturer_id)
        .then(manufacturer => {
            if (!manufacturer) {
                return res.status(400).send({
                    msg: 'Manufacturer Not Found',
                });
            }
            return manufacturer
            .destroy()
            .then(() => res.status(204).send(manufacturer))
            .catch((error) => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    }
};