const maintenance_work_order_model = require('../models').maintenance_work_order;

module.exports = {
    create(req,res) {
        return maintenance_work_order_model
            .create({
                wo_desc: req.body.wo_desc,
                wo_designation: req.body.wo_designation,
                wo_req_details: req.body.wo_req_details,
                wo_sn: req.body.wo_sn,
                is_open: req.body.is_open,
                hospital_id: req.body.hospital_id,
                user_id: req.body.user_id,
                equipment_id: req.body.equipment_id,
                ppm_id: req.body.ppm_id,
                report_id: req.body.report_id
            })
            .then(work_order => res.status(201).send(work_order))
            .catch(error => res.status(400).send(error));
    },

    list(req,res) {
        return maintenance_work_order_model
            .findAll()
            .then(work_orders => res.status(200).send(work_orders))
            .catch(error => res.status(400).send(error));
    },

    list_open(req,res) {
        return maintenance_work_order_model
            .findOne({
                where: {
                    is_open: true
                }
            })
            .then(work_orders => res.status(200).send(work_orders))
            .catch(error => res.status(400).send(error));
    },

    list_closed(req,res) {
        return maintenance_work_order_model
            .findOne({
                where: {
                    is_open: false
                }
            })
            .then(work_orders => res.status(200).send(work_orders))
            .catch(error => res.status(400).send(error));
    },

    list_hospital(req,res) {
        return maintenance_work_order_model
            .findAll({
                where: {
                    hospital_id: req.params.hospital_id
                }
            })
            .then(work_orders => res.status(200).send(work_orders))
            .catch(error => res.status(400).send(error));
    },

    list_hospital_open(req,res) {
        return maintenance_work_order_model
            .findOne({
                where: {
                    hospital_id: req.params.hospital_id,
                    is_open: true
                }
            })
            .then(work_orders => res.status(200).send(work_orders))
            .catch(error => res.status(400).send(error));
    },

    list_hospital_closed(req,res) {
        return maintenance_work_order_model
            .findOne({
                where: {
                    hospital_id: req.params.hospital_id,
                    is_open: false
                }
            })
            .then(work_orders => res.status(200).send(work_orders))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req,res) {
        return maintenance_work_order_model
            .findById(req.params.wo_id)
            .then(work_order => res.status(200).send(work_order))
            .catch(error => res.status(400).send(error));
    },

    retrieve_sn(req,res) {
        return maintenance_work_order_model
            .findOne({
                where: {
                    hospital_id: req.params.hospital_id,
                    wo_sn: req.params.wo_sn
                }
            })
            .then(work_order => res.status(200).send(work_order))
            .catch(error => res.status(400).send(error));
    },

    update(req,res) {
        return maintenance_work_order_model
            .findById(req.params.wo_id)
            .then(work_order => {
                return work_order
                    .update({
                        wo_desc: req.body.wo_desc || work_order.wo_desc,
                        wo_designation: req.body.wo_designation || work_order.wo_designation,
                        wo_req_details: req.body.wo_req_details || work_order.wo_req_details,
                        wo_sn: req.body.wo_sn || work_order.wo_sn,
                        is_open: req.body.is_open || work_order.is_open,
                        hospital_id: req.body.hospital_id || work_order.hospital_id,
                        user_id: req.body.user_id || work_order.user_id,
                        equipment_id: req.body.equipment_id || work_order.equipment_id,
                        ppm_id: req.body.ppm_id || work_order.ppm_id,
                        report_id: req.body.report_id || work_order.report_id
                    })
                    .then(() => res.status(200).send(work_order))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    update_sn(req,res) {
        return maintenance_work_order_model
            .findOne({
                where: {
                    hospital_id: req.params.hospital_id,
                    wo_sn: req.params.wo_sn
                }
            })
            .then(work_order => {
                return work_order
                    .update({
                        wo_desc: req.body.wo_desc || work_order.wo_desc,
                        wo_designation: req.body.wo_designation || work_order.wo_designation,
                        wo_req_details: req.body.wo_req_details || work_order.wo_req_details,
                        wo_sn: req.body.wo_sn || work_order.wo_sn,
                        is_open: req.body.is_open || work_order.is_open,
                        hospital_id: req.body.hospital_id || work_order.hospital_id,
                        user_id: req.body.user_id || work_order.user_id,
                        equipment_id: req.body.equipment_id || work_order.equipment_id,
                        ppm_id: req.body.ppm_id || work_order.ppm_id,
                        report_id: req.body.report_id || work_order.report_id
                    })
                    .then(() => res.status(200).send(work_order))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy(req,res) {
        return maintenance_work_order_model
            .findById(req.params.wo_id)
            .then(work_order => {
                return work_order
                    .destroy()
                    .then(() => res.status(204).send(work_order))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy_sn(req,res) {
        return maintenance_work_order_model
            .findOne({
                where: {
                    hospital_id: req.params.hospital_id,
                    wo_sn: req.params.wo_sn
                }
            })
            .then(work_order => {
                return work_order
                    .destroy()
                    .then(() => res.status(204).send(work_order))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};