const disposal_report_model = require('../models').disposal_report;

const medical_equipment = require('../registration/equipment');
const disposal_request = require('./disposal_request');
const disposal_equipment = require('./disposal_equipment');

module.exports = {
    async validate_request(request_id) {
        let request = await disposal_request.retrieve_request(request_id);
        return request.is_approved;
    },

    async dispose_equipment(data) {
        let equipment = await medical_equipment.retrieve_equipment_details(data.equipment_id);

        let disposed_equipment = {
            'equipment_details': equipment,
            'disposal_reason': data.disposal_reason,
            'hospital_id': data.hospital_id,
            'report_id': data.id
        };

        let is_destroyed = await medical_equipment.destroy_equipment(data);
        let is_created = disposal_equipment.create(disposed_equipment);

        if (is_destroyed && is_created) {
            return true;
        } else {
            return false;
        }
    },

    async create(req,res) {
        if (await module.exports.validate_request(req.body.request_id)) {
            return disposal_report_model
                .create({
                    report_sn: req.body.report_sn,
                    report_desc: req.body.report_desc,
                    disposal_reason: req.body.disposal_reason,
                    disposal_tasks: req.body.disposal_tasks,
                    is_open: req.body.is_open,
                    hospital_id: req.params.hospital_id,
                    equipment_id: req.body.equipment_id,
                    user_id: req.body.user_id,
                    request_id: req.body.request_id
                })
                .then(async disposal_report => {
                    if (!disposal_report.is_open) {
                        let disposal_result = await module.exports.dispose_equipment(disposal_report);
                    
                        if (disposal_result) {
                            disposal_report.is_disposed = true;
                            return res.status(201).send(disposal_report);
                        }
                    } else {
                        return res.status(201).send(disposal_report);
                    }
                })
                .catch(error => res.status(400).send(error));
        }
    },

    list(req,res) {
        return disposal_report_model
            .findAll()
            .then(disposal_reports => res.status(200).send(disposal_reports))
            .catch(error => res.status(400).send(error));
    },

    list_open(req,res) {
        return disposal_report_model
            .findAll({
                where: {
                    is_open: true
                }
            })
            .then(disposal_reports => res.status(200).send(disposal_reports))
            .catch(error => res.status(400).send(error));
    },

    list_closed(req,res) {
        return disposal_report_model
            .findAll({
                where: {
                    is_open: false
                }
            })
            .then(disposal_reports => res.status(200).send(disposal_reports))
            .catch(error => res.status(400).send(error));
    },

    list_hospital(req,res) {
        return disposal_report_model
            .findAll({
                where: {
                    hospital_id: req.params.hospital_id
                }
            })
            .then(disposal_reports => res.status(200).send(disposal_reports))
            .catch(error => res.status(400).send(error));
    },

    list_hospital_open(req,res) {
        return disposal_report_model
            .findAll({
                where: {
                    hospital_id: req.params.hospital_id,
                    is_open: true
                }
            })
            .then(disposal_reports => res.status(200).send(disposal_reports))
            .catch(error => res.status(400).send(error));
    },

    list_hospital_closed(req,res) {
        return disposal_report_model
            .findAll({
                where: {
                    hospital_id: req.params.hospital_id,
                    is_open: false
                }
            })
            .then(disposal_reports => res.status(200).send(disposal_reports))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req,res) {
        return disposal_report_model
            .findById(req.params.report_id)
            .then(disposal_report => res.status(200).send(disposal_report))
            .catch(error => res.status(400).send(error));
    },

    retrieve_sn(req,res) {
        return disposal_report_model
            .findOne({
                where: {
                    hospital_id: req.params.hospital_id,
                    report_sn: req.params.report_sn
                }
            })
            .then(disposal_report => res.status(200).send(disposal_report))
            .catch(error => res.status(400).send(error));
    },

    async update(req,res) {
        if (await module.exports.validate_request(req.body.request_id)) {
            return disposal_report_model
                .findById(req.params.report_id)
                .then(disposal_report => {
                    return disposal_report
                        .update({
                            report_sn: req.body.report_sn || disposal_report.report_sn,
                            report_desc: req.body.report_desc || disposal_report.report_desc,
                            disposal_reason: req.body.disposal_reason || disposal_report.disposal_reason,
                            disposal_tasks: req.body.disposal_tasks || disposal_report.disposal_tasks,
                            is_open: req.body.is_open || disposal_report.is_open,
                            hospital_id: req.params.hospital_id || disposal_report.hospital_id,
                            equipment_id: req.body.equipment_id || disposal_report.equipment_id,
                            user_id: req.body.user_id || disposal_report.user_id,
                            request_id: req.body.request_id || disposal_report.request_id
                        })
                        .then(async () => {
                            if (!disposal_report.is_open) {
                                let disposal_result = await module.exports.dispose_equipment(disposal_report);
                            
                                if (disposal_result) {
                                    disposal_report.is_disposed = true;
                                    return res.status(200).send(disposal_report);
                                }
                            } else {
                                return res.status(200).send(disposal_report);
                            }
                        })
                        .catch((error) => res.status(400).send(error));
                })
                .catch(error => res.status(400).send(error));
        }
    },

    async update_sn(req,res) {
        if (await module.exports.validate_request(req.body.request_id)) {
            return disposal_report_model
                .findOne({
                    where: {
                        hospital_id: req.params.hospital_id,
                        report_sn: req.params.report_sn
                    }
                })
                .then(disposal_report => {
                    return disposal_report
                        .update({
                            report_sn: req.body.report_sn || disposal_report.report_sn,
                            report_desc: req.body.report_desc || disposal_report.report_desc,
                            disposal_reason: req.body.disposal_reason || disposal_report.disposal_reason,
                            disposal_tasks: req.body.disposal_tasks || disposal_report.disposal_tasks,
                            is_open: req.body.is_open || disposal_report.is_open,
                            hospital_id: req.params.hospital_id || disposal_report.hospital_id,
                            equipment_id: req.body.equipment_id || disposal_report.equipment_id,
                            user_id: req.body.user_id || disposal_report.user_id,
                            request_id: req.body.request_id || disposal_report.request_id
                        })
                        .then(async () => {
                            if (!disposal_report.is_open) {
                                let disposal_result = await module.exports.dispose_equipment(disposal_report);
                            
                                if (disposal_result) {
                                    disposal_report.is_disposed = true;
                                    return res.status(200).send(disposal_report);
                                }
                            } else {
                                return res.status(200).send(disposal_report);
                            }
                        })
                        .catch((error) => res.status(400).send(error));
                })
                .catch(error => res.status(400).send(error));
        }
    },

    destroy(req,res) {
        return disposal_report_model
            .findById(req.params.report_id)
            .then(disposal_report => {
                return disposal_report
                    .destroy()
                    .then(() => res.status(204).send(disposal_report))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy_sn(req,res) {
        return disposal_report_model
            .findOne({
                where: {
                    hospital_id: req.params.hospital_id,
                    report_sn: req.params.report_sn
                }
            })
            .then(disposal_report => {
                return disposal_report
                    .destroy()
                    .then(() => res.status(204).send(disposal_report))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
    
};