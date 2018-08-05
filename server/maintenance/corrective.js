const maintenance_cm_model = require('../models').maintenance_cm;

module.exports = {
    create(req,res) {
        return maintenance_cm_model
            .create({
                apparatus_id: req.body.apparatus_id,
                spare_part_id: req.body.spare_part_id,
                qualitative_tasks: req.body.qualitative_tasks,
                quantitative_tasks: req.body.quantitative_tasks,
                preventive_tasks: req.body.preventive_tasks,
                est_tasks: req.body.est_tasks,
                notes: req.body.notes,
                cm_sn: req.body.cm_sn,
                cm_status: req.body.cm_status,
                cm_result: req.body.cm_result,
                cm_next_date: req.body.cm_next_date,
                user_id: req.body.user_id,
                equipment_id: req.body.equipment_id,
                work_order_id: req.body.work_order_id
            })
            .then(cm => res.status(201).send(cm))
            .catch(error => res.status(400).send(error));
    },

    list(req,res) {
        return maintenance_cm_model
            .findAll()
            .then(cms => res.status(200).send(cms))
            .catch(error => res.status(400).send(error));
    },

    list_open(req,res) {
        return maintenance_cm_model
            .findAll({
                where: {
                    cm_status: true
                }
            })
            .then(cms => res.status(200).send(cms))
            .catch(error => res.status(400).send(error));
    },

    list_closed(req,res) {
        return maintenance_cm_model
            .findAll({
                where: {
                    cm_status: false
                }
            })
            .then(cms => res.status(200).send(cms))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req,res) {
        return maintenance_cm_model
            .findById(req.params.cm_id)
            .then(cm => res.status(200).send(cm))
            .catch(error => res.status(400).send(error));
    },

    retrieve_sn(req,res) {
        return maintenance_cm_model
            .findOne({
                where: {
                    cm_sn: req.params.cm_sn
                }
            })
            .then(cm => res.status(200).send(cm))
            .catch(error => res.status(400).send(error));
    },

    update(req,res) {
        return maintenance_cm_model // close report, pm, work order if status FALSE
            .findById(req.params.cm_id)
            .then(cm => {
                return cm
                    .update({
                        apparatus_id: req.body.apparatus_id || cm.apparatus_id,
                        spare_part_id: req.body.spare_part_id || cm.spare_part_id,
                        qualitative_tasks: req.body.qualitative_tasks || cm.qualitative_tasks,
                        quantitative_tasks: req.body.quantitative_tasks || cm.quantitative_tasks,
                        preventive_tasks: req.body.preventive_tasks || cm.preventive_tasks,
                        est_tasks: req.body.est_tasks || cm.est_tasks,
                        notes: req.body.notes || cm.notes,
                        cm_sn: req.body.cm_sn || cm.cm_sn,
                        cm_status: req.body.cm_status || cm.cm_status,
                        cm_result: req.body.cm_result || cm.cm_result,
                        cm_next_date: req.body.cm_next_date || cm.cm_next_date,
                        user_id: req.body.user_id || cm.user_id,
                        equipment_id: req.body.equipment_id || cm.equipment_id,
                        work_order_id: req.body.work_order_id || cm.work_order_id
                    })
                    .then(() => res.status(200).send(cm))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    update_sn(req,res) {
        return maintenance_cm_model // close report, pm, work order if status FALSE
            .findOne({
                where: {
                    cm_sn: req.params.cm_sn
                }
            })
            .then(cm => {
                return cm
                    .update({
                        apparatus_id: req.body.apparatus_id || cm.apparatus_id,
                        spare_part_id: req.body.spare_part_id || cm.spare_part_id,
                        qualitative_tasks: req.body.qualitative_tasks || cm.qualitative_tasks,
                        quantitative_tasks: req.body.quantitative_tasks || cm.quantitative_tasks,
                        preventive_tasks: req.body.preventive_tasks || cm.preventive_tasks,
                        est_tasks: req.body.est_tasks || cm.est_tasks,
                        notes: req.body.notes || cm.notes,
                        cm_sn: req.body.cm_sn || cm.cm_sn,
                        cm_status: req.body.cm_status || cm.cm_status,
                        cm_result: req.body.cm_result || cm.cm_result,
                        cm_next_date: req.body.cm_next_date || cm.cm_next_date,
                        user_id: req.body.user_id || cm.user_id,
                        equipment_id: req.body.equipment_id || cm.equipment_id,
                        work_order_id: req.body.work_order_id || cm.work_order_id
                    })
                    .then(() => res.status(200).send(cm))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy(req,res) {
        return maintenance_cm_model
            .findById(req.params.cm_id)
            .then(cm => {
                return cm
                    .destroy()
                    .then(() => res.status(204).send(cm))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy_sn(req,res) {
        return maintenance_cm_model
            .findOne({
                where: {
                    cm_sn: req.params.cm_sn
                }
            })
            .then(cm => {
                return cm
                    .destroy()
                    .then(() => res.status(204).send(cm))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
};