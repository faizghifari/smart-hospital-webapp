const maintenance_ppm_model = require('../models').maintenance_ppm;

module.exports = {
    create(req,res) {
        return maintenance_ppm_model
            .create({
                apparatus_id: req.body.apparatus_id,
                spare_part_id: req.body.spare_part_id,
                qualitative_tasks: req.body.qualitative_tasks,
                quantitative_tasks: req.body.quantitative_tasks,
                preventive_tasks: req.body.preventive_tasks,
                est_tasks: req.body.est_tasks,
                notes: req.body.notes,
                is_open: req.body.is_open,
                ppm_sn: req.body.ppm_sn,
                ppm_result: req.body.ppm_result,
                ppm_next_date: req.body.ppm_next_date,
                hospital_id: req.body.hospital_id,
                user_id: req.body.user_id,
                equipment_id: req.body.equipment_id
            })
            .then(ppm => res.status(201).send(ppm))
            .catch(error => res.status(400).send(error));
    },

    list(req,res) {
        return maintenance_ppm_model
            .findAll()
            .then(ppms => res.status(200).send(ppms))
            .catch(error => res.status(400).send(error));
    },

    list_open(req,res) {
        return maintenance_ppm_model
            .findAll({
                where: {
                    is_open: true
                }
            })
            .then(ppms => res.status(200).send(ppms))
            .catch(error => res.status(400).send(error));
    },

    list_closed(req,res) {
        return maintenance_ppm_model
            .findAll({
                where: {
                    is_open: false
                }
            })
            .then(ppms => res.status(200).send(ppms))
            .catch(error => res.status(400).send(error));
    },

    list_hospital(req,res) {
        return maintenance_ppm_model
            .findAll({
                where: {
                    hospital_id: req.params.hospital_id
                }
            })
            .then(ppms => res.status(200).send(ppms))
            .catch(error => res.status(400).send(error));
    },

    list_hospital_open(req,res) {
        return maintenance_ppm_model
            .findAll({
                where: {
                    hospital_id: req.params.hospital_id,
                    is_open: true
                }
            })
            .then(ppms => res.status(200).send(ppms))
            .catch(error => res.status(400).send(error));
    },

    list_hospital_closed(req,res) {
        return maintenance_ppm_model
            .findAll({
                where: {
                    hospital_id: req.params.hospital_id,
                    is_open: false
                }
            })
            .then(ppms => res.status(200).send(ppms))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req,res) {
        return maintenance_ppm_model
            .findById(req.params.ppm_id)
            .then(ppm => res.status(200).send(ppm))
            .catch(error => res.status(400).send(error));
    },

    retrieve_sn(req,res) {
        return maintenance_ppm_model
            .findOne({
                where: {
                    hospital_id: req.params.hospital_id,
                    ppm_sn: req.params.ppm_sn
                }
            })
            .then(ppm => res.status(200).send(ppm))
            .catch(error => res.status(400).send(error));
    },

    update(req,res) {
        return maintenance_ppm_model
            .findById(req.params.ppm_id)
            .then(ppm => {
                return ppm
                    .update({
                        apparatus_id: req.body.apparatus_id || ppm.apparatus_id,
                        spare_part_id: req.body.spare_part_id || ppm.spare_part_id,
                        qualitative_tasks: req.body.qualitative_tasks || ppm.qualitative_tasks,
                        quantitative_tasks: req.body.quantitative_tasks || ppm.quantitative_tasks,
                        preventive_tasks: req.body.preventive_tasks || ppm.preventive_tasks,
                        est_tasks: req.body.est_tasks || ppm.est_tasks,
                        notes: req.body.notes || ppm.notes,
                        is_open: req.body.is_open || ppm.is_open,
                        ppm_sn: req.body.ppm_sn || ppm.ppm_sn,
                        ppm_result: req.body.ppm_result || ppm.ppm_result,
                        ppm_next_date: req.body.ppm_next_date || ppm.ppm_next_date,
                        hospital_id: req.body.hospital_id || ppm.hospital_id,
                        user_id: req.body.user_id || ppm.user_id,
                        equipment_id: req.body.equipment_id || ppm.equipment_id
                    })
                    .then(() => res.status(200).send(ppm))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    update_sn(req,res) {
        return maintenance_ppm_model
            .findOne({
                where: {
                    hospital_id: req.params.hospital_id,
                    ppm_sn: req.params.ppm_sn
                }
            })
            .then(ppm => {
                return ppm
                    .update({
                        apparatus_id: req.body.apparatus_id || ppm.apparatus_id,
                        spare_part_id: req.body.spare_part_id || ppm.spare_part_id,
                        qualitative_tasks: req.body.qualitative_tasks || ppm.qualitative_tasks,
                        quantitative_tasks: req.body.quantitative_tasks || ppm.quantitative_tasks,
                        preventive_tasks: req.body.preventive_tasks || ppm.preventive_tasks,
                        est_tasks: req.body.est_tasks || ppm.est_tasks,
                        notes: req.body.notes || ppm.notes,
                        is_open: req.body.is_open || ppm.is_open,
                        ppm_sn: req.body.ppm_sn || ppm.ppm_sn,
                        ppm_result: req.body.ppm_result || ppm.ppm_result,
                        ppm_next_date: req.body.ppm_next_date || ppm.ppm_next_date,
                        hospital_id: req.body.hospital_id || ppm.hospital_id,
                        user_id: req.body.user_id || ppm.user_id,
                        equipment_id: req.body.equipment_id || ppm.equipment_id
                    })
                    .then(() => res.status(200).send(ppm))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy(req,res) {
        return maintenance_ppm_model
            .findById(req.params.ppm_id)
            .then(ppm => {
                return ppm
                    .destroy()
                    .then(() => res.status(204).send(ppm))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy_sn(req,res) {
        return maintenance_ppm_model
            .findOne({
                where: {
                    hospital_id: req.params.hospital_id,
                    ppm_sn: req.params.ppm_sn
                }
            })
            .then(ppm => {
                return ppm
                    .destroy()
                    .then(() => res.status(204).send(ppm))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
};