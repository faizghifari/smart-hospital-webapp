const adverse_event_report = require('../models').adverse_event_reports;

module.exports = {
    create(req,res) {
        return adverse_event_report
            .create({
                report_sn: req.body.report_sn,
                report_desc: req.body.report_desc,
                report_details: req.body.report_details,
                equipment_id: req.body.equipment_id,
                user_id: req.body.user_id,
                hospital_id: req.params.hospital_id
            })
            .then(report => res.status(201).send(report))
            .catch(error => res.status(400).send(error));
    },

    list(req,res) {
        return adverse_event_report
            .findAll()
            .then(reports => res.status(200).send(reports))
            .catch(error => res.status(400).send(error));
    },

    list_hospital(req,res) {
        return adverse_event_report
            .findAll({
                where: {
                    hospital_id: req.params.hospital_id
                }
            })
            .then(reports => res.status(200).send(reports))
            .catch(error => res.status(400).send(error));
    },

    list_equipment(req,res) {
        return adverse_event_report
            .findAll({
                where: {
                    hospital_id: req.params.hospital_id,
                    equipment_id: req.params.equipment_id
                }
            })
            .then(reports => res.status(200).send(reports))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req,res) {
        return adverse_event_report
            .findById(req.params.report_id)
            .then(report => res.status(200).send(report))
            .catch(error => res.status(400).send(error));
    },

    retrieve_sn(req,res) {
        return adverse_event_report
            .findOne({
                where: {
                    hospital_id: req.params.hospital_id,
                    report_sn: req.params.report_sn
                }
            })
            .then(report => res.status(200).send(report))
            .catch(error => res.status(400).send(error));
    },

    update(req,res) {
        return adverse_event_report
            .findById(req.params.report_id)
            .then(report => {
                return report
                    .update({
                        report_sn: req.body.report_sn || report.report_sn,
                        report_desc: req.body.report_desc || report.report_desc,
                        report_details: req.body.report_details || report.report_details,
                        equipment_id: req.body.equipment_id || report.equipment_id,
                        user_id: req.body.user_id || report.user_id,
                        hospital_id: req.params.hospital_id || report.hospital_id
                    })
                    .then(() => res.status(200).send(report))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    update_sn(req,res) {
        return adverse_event_report
            .findOne({
                where: {
                    hospital_id: req.params.hospital_id,
                    report_sn: req.params.report_sn
                }
            })
            .then(report => {
                return report
                    .update({
                        report_sn: req.body.report_sn || report.report_sn,
                        report_desc: req.body.report_desc || report.report_desc,
                        report_details: req.body.report_details || report.report_details,
                        equipment_id: req.body.equipment_id || report.equipment_id,
                        user_id: req.body.user_id || report.user_id,
                        hospital_id: req.params.hospital_id || report.hospital_id
                    })
                    .then(() => res.status(200).send(report))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy(req,res) {
        return adverse_event_report
            .findById(req.params.report_id)
            .then(report => {
                return report
                    .destroy()
                    .then(() => res.status(204).send(report))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy_sn(req,res) {
        return adverse_event_report
            .findOne({
                where: {
                    hospital_id: req.params.hospital_id,
                    report_sn: req.params.report_sn
                }
            })
            .then(report => {
                return report
                    .destroy()
                    .then(() => res.status(204).send(report))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
};