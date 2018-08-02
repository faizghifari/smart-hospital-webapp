const device_model = require('../models').device;

module.exports = {
    create(req,res) {
        return device_model
            .create({
                device_sn: req.body.device_sn,
                device_qrcode: req.body.device_qrcode,
                device_sensors: req.body.device_sensors
            })
            .then(device => res.status(201).send(device))
            .catch(error => res.status(400).send(error));
    },

    list(req,res) {
        return device_model
            .findAll()
            .then(devices => res.status(200).send(devices))
            .catch(error => res.status(400).send(error));
    },

    list_sn(req,res) {
        return device_model
            .findAll({
                attributes: ['id', 'device_ns']
            })
            .then(devices => res.status(200).send(devices))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req,res) {
        return device_model
            .findById(req.params.device_id)
            .then(device => res.status(200).send(device))
            .catch(error => res.status(400).send(error));
    },

    retrieve_sn(req,res) {
        return device_model
            .findOne({
                where: {
                    device_sn: req.params.device_sn
                }
            })
            .then(device => res.status(200).send(device))
            .catch(error => res.status(400).send(error));
    },

    update(req,res) {
        return device_model
            .findById(req.params.device_id)
            .then(device => {
                return device
                    .update({
                        device_sn: req.body.device_sn || device.device_sn,
                        device_qrcode: req.body.device_qrcode || device.device_qrcode,
                        device_sensors: req.body.device_sensors || device.device_sensors
                    })
                    .then(() => res.status(200).send(device))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy(req,res) {
        return device_model
            .findById(req.params.device_id)
            .then(device => {
                return device
                    .destroy()
                    .then(() => res.status(204).send(device))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
};