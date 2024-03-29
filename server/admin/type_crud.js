const medical_equipments_type = require('../models').medical_equipments_type;
const apparatus_type = require('./apparatus_type_crud');
const spare_part_type = require('./spare_part_type_crud');
const qty_task = require('./qty_task_crud');

module.exports = {
    create(req,res) {
        return medical_equipments_type
            .create({
                type_name: req.body.type_name,
                type_desc: req.body.type_desc,
                type_hr_req: req.body.type_hr_req,
                type_time_params: req.body.type_time_params,
                type_level: req.body.type_level,
                apparatus_type_id: req.body.apparatus_type_id,
                spare_part_type_id: req.body.spare_part_type_id,
                qualitative_tasks: req.body.qualitative_tasks,
                preventive_tasks: req.body.preventive_tasks,
                disposal_tasks: req.body.disposal_tasks
            })
            .then(eq_type => res.status(201).send(eq_type))
            .catch(error => res.status(400).send(error));
    },

    list(req,res) {
        return medical_equipments_type
            .findAll()
            .then(eq_types => res.status(200).send(eq_types))
            .catch(error => res.status(400).send(error));
    },

    list_name(req,res) {
        return medical_equipments_type
            .findAll({
                attributes: ['id', 'type_name'],
                where: {
                    type_level: 1
                }
            })
            .then(eq_types => res.status(200).send(eq_types))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req,res) {
        return medical_equipments_type
            .findById(req.params.type_id)
            .then(eq_type => {
                if (!eq_type) {
                    return res.status(404).send({
                        msg: 'Medical Equipment Type Not Found',
                    });
                }
                return res.status(200).send(eq_type);
            })
            .catch(error => res.status(400).send(error));
    },

    retrieve_type(type_name, type_level) {
        return new Promise((resolve) => {
            medical_equipments_type
                .findOne({
                    where: {
                        type_name: type_name,
                        type_level: type_level
                    }
                })
                .then(eq_type => {
                    resolve(eq_type);
                });
        });
    },

    async retrieve_apparatus_type(type_list) {
        let apparatus_list = [];

        for (let i in type_list) {
            let apparatus = await apparatus_type.retrieve(type_list[i]);
            apparatus_list.push(apparatus);
        }

        return apparatus_list;
    },

    async retrieve_qty_tasks(equipment_type_id, type_list) {
        let quantitative_tasks = [];
        for (let i in type_list) {
            let params = {
                'equipments_type_id': equipment_type_id,
                'apparatus_type_id': type_list[i]
            };

            let quantitative_task = await qty_task.retrieve_qty_task(params);
            quantitative_tasks.push(quantitative_task);
        }

        return quantitative_tasks;
    },

    async retrieve_part_type(part_type_list) {
        let spare_part_list = [];
        for (let i in part_type_list) {
            let part_type = await spare_part_type.retrieve(part_type_list[i]);
            spare_part_list.push(part_type);
        }

        return spare_part_list;
    },

    retrieve_mt_plan(req,res) { // need to move?
        return medical_equipments_type
            .findById(req.params.type_id)
            .then(async eq_type => {
                if (!eq_type) {
                    return res.status(404).send({
                        msg: 'Medical Equipment Type Not Found',
                    });
                }
                let data = {
                    'type_name': eq_type.type_name,
                    'type_desc': eq_type.type_desc,
                    'type_hr_req': eq_type.type_hr_req,
                    'type_time_params': eq_type.type_time_params,
                    'type_level': eq_type.type_level,
                    'qualitative_tasks': eq_type.qualitative_tasks,
                    'preventive_tasks': eq_type.preventive_tasks
                };

                let apparatus_list = await module.exports.retrieve_apparatus_type(eq_type.apparatus_type_id);
                let quantitative_tasks = await module.exports.retrieve_qty_tasks(eq_type.id, eq_type.apparatus_type_id);
                let spare_part_list = await module.exports.retrieve_part_type(eq_type.spare_part_type_id);

                data.quantitative_tasks = quantitative_tasks;
                data.apparatus_list = apparatus_list;
                data.spare_part_list = spare_part_list;

                let data_stringified = JSON.stringify(data);
                return res.status(200).send(data_stringified);
            })
            .catch(error => res.status(400).send(error));

    },

    retrieve_disposal_plan(req,res) {
        return medical_equipments_type
            .findById(req.params.type_id, {
                attributes: ['id', 'disposal_tasks']
            })
            .then(eq_type => res.status(200).send(eq_type))
            .catch(error => res.status(400).send(error));
    },

    update(req,res) {
        return medical_equipments_type
            .findById(req.params.type_id)
            .then(eq_type => {
                if (!eq_type) {
                    return res.status(404).send({
                        msg: 'Medical Equipment Type Not Found',
                    });
                }
                return eq_type
                    .update({
                        type_name: req.body.type_name || eq_type.type_name,
                        type_desc: req.body.type_desc || eq_type.type_desc,
                        type_hr_req: req.body.type_hr_req|| eq_type.type_hr_req,
                        type_time_params: req.body.type_time_params || eq_type.type_time_params,
                        type_level: req.body.type_level || eq_type.type_level,
                        apparatus_type_id: req.body.apparatus_type_id || eq_type.apparatus_type_id,
                        spare_part_type_id: req.body.spare_part_type_id || eq_type.spare_part_type_id,
                        qualitative_tasks: req.body.qualitative_tasks || eq_type.qualitative_tasks,
                        preventive_tasks: req.body.preventive_tasks || eq_type.preventive_tasks,
                        disposal_tasks: req.body.disposal_tasks || eq_type.disposal_tasks
                    })
                    .then(() => res.status(200).send(eq_type))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    destroy(req,res) {
        return medical_equipments_type
            .findById(req.params.type_id)
            .then(eq_type => {
                if (!eq_type) {
                    return res.status(404).send({
                        msg: 'Medical Equipment Type Not Found',
                    });
                }
                return eq_type
                    .destroy()
                    .then(() => res.status(204).send(eq_type))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    }
};