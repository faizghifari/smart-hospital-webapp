const apparatus_model = require('../models').apparatus;

module.exports = {
    create(req,res) {
        return apparatus_model
            .create({
                apparatus_name: req.body.apparatus_name,
                apparatus_desc: req.body.apparatus_desc,
                apparatus_sn: req.body.apparatus_sn,
                apparatus_qrcode: req.body.apparatus_qrcode,
                apparatus_calibration_due_on: req.body.apparatus_calibration_due_on
            })
            .then(apparatus => res.status(201).send(apparatus))
            .catch(error => res.status(400).send(error));
    },

    list(req,res) {
        return apparatus_model
            .findAll()
            .then(apparatus => res.staus(200).send(apparatus))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req,res) {
        return apparatus_model
            .findById(req.params.apparatus_id)
            .then(apparatus => res.status(200).send(apparatus))
            .catch(error => res.status(400).send(error));
    },

    update(req,res) {
        return apparatus_model
            .findById(req.params.apparatus_id)
            .then(apparatus => {
                if (!apparatus) {
                    return res.status(404).send({
                        msg: 'Apparatus not found'
                    });
                }
                return apparatus
                    .update({
                        apparatus_name: req.body.apparatus_name || apparatus.apparatus_name,
                        apparatus_desc: req.body.apparatus_desc || apparatus.apparatus_desc,
                        apparatus_sn: req.body.apparatus_sn || apparatus.apparatus_sn,
                        apparatus_qrcode: req.body.apparatus_qrcode || apparatus.apparatus_qrcode,
                        apparatus_calibration_due_on: req.body.apparatus_calibration_due_on || apparatus.apparatus_calibration_due_on
                    })
                    .then(() => res.status(200).send(apparatus))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    destroy(req,res) {
        return apparatus_model
            .findById(req.params.apparatus_id)
            .then(apparatus => {
                if (!apparatus) {
                    return res.status(404).send({
                        msg: 'Apparatus not found'
                    });
                }
                return apparatus
                    .destroy()
                    .then(() => res.status(204).send(apparatus))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    }
};