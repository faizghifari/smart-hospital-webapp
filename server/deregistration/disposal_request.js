const disposal_request_model = require('../models').disposal_request;

const corrective = require('../maintenance/corrective');

module.exports = {
    async validate_cm(cm_id) {
        let cm = await corrective.retrieve_cm(cm_id);
        return cm.is_ber;
    },

    async create(req,res) {
        if (await module.exports.validate_cm(req.body.cm_id)) {
            return disposal_request_model
                .create({
                    request_sn: req.body.request_sn,
                    request_desc: req.body.request_desc,
                    disposal_reason: req.body.disposal_reason,
                    is_approved: req.body.is_approved,
                    hospital_id: req.params.hospital_id,
                    user_id: req.body.user_id,
                    equipment_id: req.body.equipment_id,
                    cm_id: req.body.cm_id
                })
                .then(disposal_request => res.status(201).send(disposal_request))
                .catch(error => res.status(400).send(error));
        }
    },

    list(req,res) {
        return disposal_request_model
            .findAll()
            .then(disposal_requests => res.status(200).send(disposal_requests))
            .catch(error => res.status(400).send(error));
    },

    list_approved(req,res) {
        return disposal_request_model
            .findAll({
                where: {
                    is_approved: true
                }
            })
            .then(disposal_requests => res.status(200).send(disposal_requests))
            .catch(error => res.status(400).send(error));
    },

    list_rejected(req,res) {
        return disposal_request_model
            .findAll({
                where: {
                    is_approved: false
                }
            })
            .then(disposal_requests => res.status(200).send(disposal_requests))
            .catch(error => res.status(400).send(error));
    },

    list_hospital(req,res) {
        return disposal_request_model
            .findAll({
                where: {
                    hospital_id: req.params.hospital_id
                }
            })
            .then(disposal_requests => res.status(200).send(disposal_requests))
            .catch(error => res.status(400).send(error));
    },

    list_hospital_approved(req,res) {
        return disposal_request_model
            .findAll({
                where: {
                    hospital_id: req.params.hospital_id,
                    is_approved: true
                }
            })
            .then(disposal_requests => res.status(200).send(disposal_requests))
            .catch(error => res.status(400).send(error));
    },

    list_hospital_rejected(req,res) {
        return disposal_request_model
            .findAll({
                where: {
                    hospital_id: req.params.hospital_id,
                    is_approved: false
                }
            })
            .then(disposal_requests => res.status(200).send(disposal_requests))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req,res) {
        return disposal_request_model
            .findById(req.params.request_id)
            .then(disposal_request => res.status(200).send(disposal_request))
            .catch(error => res.status(400).send(error));
    },

    retrieve_sn(req,res) {
        return disposal_request_model
            .findOne({
                where: {
                    hospital_id: req.params.hospital_id,
                    request_sn: req.params.request_sn
                }
            })
            .then(disposal_request => res.status(200).send(disposal_request))
            .catch(error => res.status(400).send(error));
    },

    retrieve_request(request_id) {
        return new Promise((resolve) => {
            disposal_request_model
                .findById(request_id)
                .then(disposal_request => {
                    resolve(disposal_request);
                });
        });
    },

    async update(req,res) {
        if (await module.exports.validate_cm(req.body.cm_id)) {
            return disposal_request_model
                .findById(req.params.request_id)
                .then(disposal_request => {
                    return disposal_request
                        .update({
                            request_sn: req.body.request_sn || disposal_request.request_sn,
                            request_desc: req.body.request_desc || disposal_request.request_desc,
                            disposal_reason: req.body.disposal_reason || disposal_request.disposal_reason,
                            is_approved: req.body.is_approved || disposal_request.is_approved,
                            hospital_id: req.params.hospital_id || disposal_request.hospital_id,
                            user_id: req.body.user_id || disposal_request.user_id,
                            equipment_id: req.body.equipment_id || disposal_request.equipment_id,
                            cm_id: req.body.cm_id || disposal_request.cm_id
                        })
                        .then(() => res.status(200).send(disposal_request))
                        .catch((error) => res.status(400).send(error));
                })
                .catch(error => res.status(400).send(error));
        }
    },

    async update_sn(req,res) {
        if (await module.exports.validate_cm(req.body.cm_id)) {
            return disposal_request_model
                .findOne({
                    where: {
                        hospital_id: req.params.hospital_id,
                        request_sn: req.params.request_sn
                    }
                })
                .then(disposal_request => {
                    return disposal_request
                        .update({
                            request_sn: req.body.request_sn || disposal_request.request_sn,
                            request_desc: req.body.request_desc || disposal_request.request_desc,
                            disposal_reason: req.body.disposal_reason || disposal_request.disposal_reason,
                            is_approved: req.body.is_approved || disposal_request.is_approved,
                            hospital_id: req.params.hospital_id || disposal_request.hospital_id,
                            user_id: req.body.user_id || disposal_request.user_id,
                            equipment_id: req.body.equipment_id || disposal_request.equipment_id,
                            cm_id: req.body.cm_id || disposal_request.cm_id
                        })
                        .then(() => res.status(200).send(disposal_request))
                        .catch((error) => res.status(400).send(error));
                })
                .catch(error => res.status(400).send(error));
        }
    },

    destroy(req,res) {
        return disposal_request_model
            .findById(req.params.request_id)
            .then(disposal_request => {
                return disposal_request
                    .destroy()
                    .then(() => res.status(204).send(disposal_request))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy_sn(req,res) {
        return disposal_request_model
            .findOne({
                where: {
                    hospital_id: req.params.hospital_id,
                    request_sn: req.params.request_sn
                }
            })
            .then(disposal_request => {
                return disposal_request
                    .destroy()
                    .then(() => res.status(204).send(disposal_request))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
};