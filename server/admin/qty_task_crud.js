const maintenance_qty_task_model = require('../models').maintenance_qty_task;

module.exports = {
    create(req,res) {
        return maintenance_qty_task_model
            .create({
                quantitave_tasks: req.body.quantitave_tasks,
                apparatus_type_id: req.body.apparatus_type_id,
                equipments_type_id: req.body.equipments_type_id
            })
            .then(qty_task => res.status(201).send(qty_task))
            .catch(error => res.status(400).send(error));
    },

    list(req,res) {
        return maintenance_qty_task_model
            .findAll()
            .then(qty_tasks => res.status(200).send(qty_tasks))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req,res) {
        return maintenance_qty_task_model
            .findById(req.params.qty_task_id)
            .then(qty_task => res.status(200).send(qty_task))
            .catch(error => res.status(400).send(error));
    },

    retrieve_details(data) {
        return maintenance_qty_task_model
            .findOne({
                where: {
                    equipments_type_id: data.equipments_type_id,
                    apparatus_type_id: data.apparatus_type_id
                }
            })
            .catch(error => console.log(error));
    },

    update(req,res) {
        return maintenance_qty_task_model
            .findById(req.params.qty_task_id)
            .then(qty_task => {
                return qty_task
                    .update({
                        quantitave_tasks: req.body.quantitave_tasks || qty_task.quantitave_tasks,
                        apparatus_type_id: req.body.apparatus_type_id || qty_task.apparatus_type_id,
                        equipments_type_id: req.body.equipments_type_id || qty_task.equipments_type_id
                    })
                    .then(() => res.status(200).send(qty_task))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    update_details(data) {
        return maintenance_qty_task_model
            .findOne({
                where: {
                    equipments_type_id: data.equipments_type_id,
                    apparatus_type_id: data.apparatus_type_id
                }
            })
            .then(qty_task => {
                return qty_task
                    .update({
                        quantitave_tasks: data.quantitave_tasks || qty_task.quantitave_tasks,
                        apparatus_type_id: data.apparatus_type_id || qty_task.apparatus_type_id,
                        equipments_type_id: data.equipments_type_id || qty_task.equipments_type_id
                    })
                    .catch((error) => console.log(error));
            })
            .catch(error => console.log(error));
    },

    destroy(req,res) {
        return maintenance_qty_task_model
            .findById(req.params.qty_task_id)
            .then(qty_task => {
                return qty_task
                    .destroy()
                    .then(() => res.status(204).send(qty_task))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy_details(data) {
        return maintenance_qty_task_model
            .findOne({
                where: {
                    equipments_type_id: data.equipments_type_id,
                    apparatus_type_id: data.apparatus_type_id
                }
            })
            .then(qty_task => {
                return qty_task
                    .destroy()
                    .catch((error) => console.log(error));
            })
            .catch(error => console.log(error));
    },
};