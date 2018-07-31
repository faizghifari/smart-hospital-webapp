const medical_equipments_type = require('../models').medical_equipments_type;

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
                quantitative_tasks: req.body.quantitative_tasks,
                preventive_tasks: req.body.preventive_tasks
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
                        quantitative_tasks: req.body.quantitative_tasks || eq_type.quantitative_tasks,
                        preventive_tasks: req.body.preventive_tasks || eq_type.preventive_tasks
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