const disposal_report_model = require('../models').disposal_report;

const corrective = require('../maintenance/corrective');
const medical_equipment = require('../registration/equipment');
const disposal_equipment = require('./disposal_equipment');

module.exports = {
    async validate_report(cm_id) {
        let cm = await corrective.retrieve_cm(cm_id);
        return cm.is_ber;
    },

    async validate_disposal(report_id) {
        let disposal_report = await module.exports.retrieve_report(report_id);
        return disposal_report.is_approved;
    },

    async dispose_equipment(data) {
        if (await module.exports.validate_disposal(data.report_id)) {
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
        } else {
            return false;
        }
    },

    async create(req,res) {
        if (await module.exports.validate_report(req.body.cm_id)) {
            return disposal_report_model
                .create({
                    disposal_sn: req.body.disposal_sn,
                    disposal_desc: req.body.disposal_desc,
                    disposal_reason: req.body.disposal_reason,
                    is_approved: req.body.is_approved,
                    hospital_id: req.params.hospital_id,
                    equipment_id: req.params.equipment_id,
                    user_id: req.body.user_id,
                    cm_id: req.body.cm_id
                })
                .then(disposal_report => res.status(201).send(disposal_report))
                .catch(error => res.status(400).send(error));
        }
    },

    list(req,res) {
        return disposal_report_model
            .findAll()
            .then(disposal_reports => res.status(200).send(disposal_reports))
            .catch(error => res.status(400).send(error));
    },

    list_approved(req,res) {
        return disposal_report_model
            .findAll({
                where: {
                    is_approved: true
                }
            })
            .then(disposal_reports => res.status(200).send(disposal_reports))
            .catch(error => res.status(400).send(error));
    },

    list_rejected(req,res) {
        return disposal_report_model
            .findAll({
                where: {
                    is_approved: false
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

    list_hospital_approved(req,res) {
        return disposal_report_model
            .findAll({
                where: {
                    hospital_id: req.params.hospital_id,
                    is_approved: true
                }
            })
            .then(disposal_reports => res.status(200).send(disposal_reports))
            .catch(error => res.status(400).send(error));
    },

    list_hospital_rejected(req,res) {
        return disposal_report_model
            .findAll({
                where: {
                    hospital_id: req.params.hospital_id,
                    is_approved: false
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

    retrieve_report(report_id) {
        return new Promise((resolve) => {
            disposal_report_model
                .findById(report_id)
                .then(disposal_report => {
                    resolve(disposal_report);
                });
        });
    },

    retrieve_sn(req,res) {
        return disposal_report_model
            .findOne({
                where: {
                    hospital_id: req.params.hospital_id,
                    disposal_sn: req.params.disposal_sn
                }
            })
            .then(disposal_report => res.status(200).send(disposal_report))
            .catch(error => res.status(400).send(error));
    },

    update(req,res) {
        return disposal_report_model
            .findById(req.params.report_id)
            .then(disposal_report => {
                return disposal_report
                    .update({
                        disposal_sn: req.body.disposal_sn,
                        disposal_desc: req.body.disposal_desc,
                        disposal_reason: req.body.disposal_reason,
                        is_approved: req.body.is_approved,
                        hospital_id: req.params.hospital_id,
                        equipment_id: req.params.equipment_id,
                        user_id: req.body.user_id,
                        cm_id: req.body.cm_id
                    })
                    .then(async () => {
                        if (disposal_report.is_approved) {
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
    },

    update_sn(req,res) {
        return disposal_report_model
            .findOne({
                where: {
                    hospital_id: req.params.hospital_id,
                    disposal_sn: req.params.disposal_sn
                }
            })
            .then(disposal_report => {
                return disposal_report
                    .update({
                        disposal_sn: req.body.disposal_sn,
                        disposal_desc: req.body.disposal_desc,
                        disposal_reason: req.body.disposal_reason,
                        is_approved: req.body.is_approved,
                        hospital_id: req.params.hospital_id,
                        equipment_id: req.params.equipment_id,
                        user_id: req.body.user_id,
                        cm_id: req.body.cm_id
                    })
                    .then(async () => {
                        if (disposal_report.is_approved) {
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
                    disposal_sn: req.params.disposal_sn
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