const report_model = require('../models').report;

module.exports = {
    create(req,res) {
        return report_model
            .create({ 
                report_sn: req.body.report_sn,
                report_desc: req.body.report_desc,
                report_details: req.body.report_details,
                report_status: req.body.report_status,
                user_id: req.body.user_id
            })
            .then(report => res.status(201).send(report)) // update equipment status to false
            .catch(error => res.status(400).send(error));
    },

    list(req,res) {
        return report_model
            .findAll()
            .then(reports => res.status(200).send(reports))
            .catch(error => res.status(400).send(error));
    },

    list_open(req,res) {
        return report_model
            .findAll({
                where: {
                    report_status: true
                }
            })
            .then(reports => res.status(200).send(reports))
            .catch(error => res.status(400).send(error));
    },

    list_closed(req,res) {
        return report_model
            .findAll({
                where: {
                    report_status: false
                }
            })
            .then(reports => res.status(200).send(reports))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req,res) {
        return report_model
            .findById(req.params.report_id)
            .then(report => res.status(200).send(report))
            .catch(error => res.status(400).send(error));
    },

    retrieve_sn(req,res) {
        return report_model
            .findOne({
                where: {
                    report_sn: req.params.report_sn
                }
            })
            .then(report => res.status(200).send(report))
            .catch(error => res.status(400).send(error));
    },

    update(req,res) {
        return report_model
            .findById(req.params.report_id)
            .then(report => { // check report status, if closed open asset usage
                return report
                    .update({
                        report_sn: req.body.report_sn || report.report_sn,
                        report_desc: req.body.report_desc || report.report_desc,
                        report_details: req.body.report_details || report.report_details,
                        report_status: req.body.report_status || report.report_status,
                        user_id: req.body.user_id || report.user_id
                    })
                    .then(() => res.status(200).send(report))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    update_sn(req,res) {
        return report_model
            .findOne({
                where: {
                    report_sn: req.params.report_sn
                }
            })
            .then(report => { // check report status, if closed open asset usage
                return report
                    .update({
                        report_sn: req.body.report_sn || report.report_sn,
                        report_desc: req.body.report_desc || report.report_desc,
                        report_details: req.body.report_details || report.report_details,
                        report_status: req.body.report_status || report.report_status,
                        user_id: req.body.user_id || report.user_id
                    })
                    .then(() => res.status(200).send(report))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy(req,res) {
        return report_model
            .findById(req.params.report_id)
            .then(report => {
                return report
                    .destroy()
                    .then(() => res.status(200).send(report))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy_sn(req,res) {
        return report_model
            .findOne({
                where: {
                    report_sn: req.params.report_sn
                }
            })
            .then(report => {
                return report
                    .destroy()
                    .then(() => res.status(200).send(report))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
};