const request = require('request');

const report_model = require('../models').breakdown_reports;

module.exports = {
    create(req,res) {
        return report_model
            .create({ 
                report_sn: req.body.report_sn,
                report_desc: req.body.report_desc,
                report_details: req.body.report_details,
                is_open: req.body.is_open || true,
                equipment_id: req.body.equipment_id,
                hospital_id: req.params.hospital_id,
                user_id: req.body.user_id
            })
            .then(report => {
                req.body.is_available = false;
                module.exports.update_availability(req.body);
                
                return res.status(201).send(report);
            })
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
                    is_open: true
                }
            })
            .then(reports => res.status(200).send(reports))
            .catch(error => res.status(400).send(error));
    },

    list_closed(req,res) {
        return report_model
            .findAll({
                where: {
                    is_open: false
                }
            })
            .then(reports => res.status(200).send(reports))
            .catch(error => res.status(400).send(error));
    },

    list_hospital(req,res) {
        return report_model
            .findAll({
                where: {
                    hospital_id: req.params.hospital_id
                }
            })
            .then(reports => res.status(200).send(reports))
            .catch(error => res.status(400).send(error));
    },

    list_hospital_open(req,res) {
        return report_model
            .findAll({
                where: {
                    hospital_id: req.params.hospital_id,
                    is_open: true
                }
            })
            .then(reports => res.status(200).send(reports))
            .catch(error => res.status(400).send(error));
    },

    list_hospital_closed(req,res) {
        return report_model
            .findAll({
                where: {
                    hospital_id: req.params.hospital_id,
                    is_open: false
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
                    hospital_id: req.params.hospital_id,
                    report_sn: req.params.report_sn
                }
            })
            .then(report => res.status(200).send(report))
            .catch(error => res.status(400).send(error));
    },

    update(req,res) {
        return report_model
            .findById(req.params.report_id)
            .then(report => {
                return report
                    .update({
                        report_sn: req.body.report_sn || report.report_sn,
                        report_desc: req.body.report_desc || report.report_desc,
                        report_details: req.body.report_details || report.report_details,
                        is_open: req.body.is_open || report.is_open,
                        equipment_id: req.body.equipment_id || report.equipment_id,
                        hospital_id: req.params.hospital_id || report.hospital_id,
                        user_id: req.body.user_id || report.user_id
                    })
                    .then(() => {
                        if (!report.is_open) {
                            report.is_available = true;
                            module.exports.update_availability(report);
                        }
                        return res.status(200).send(report);
                    })
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    update_sn(req,res) {
        return report_model
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
                        is_open: req.body.is_open || report.is_open,
                        equipment_id: req.body.equipment_id || report.equipment_id,
                        hospital_id: req.params.hospital_id || report.hospital_id,
                        user_id: req.body.user_id || report.user_id
                    })
                    .then(() => {
                        if (!report.is_open) {
                            report.is_available = true;
                            module.exports.update_availability(report);
                        }
                        return res.status(200).send(report);
                    })
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
                    hospital_id: req.params.hospital_id,
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
    },

    update_availability(data) {
        let payload = {
            'is_available': data.is_available
        };
        const url = 'http://localhost:3002/' + data.hospital_id + '/' + data.equipment_id + '/equipment/';

        request.put({
            url: url,
            json: payload
        }, (error, response, body) => {
            console.log('error:', error);
            console.log('status_code:', response && response.statusCode);
            console.log('body:', body);
        });
    }
};