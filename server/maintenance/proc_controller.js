const medical_equipment_type_proc = require('../models').medical_equipments_type_proc

module.exports = {
    create(req,res) {
        return medical_equipment_type_proc
        .create({
            proc_sequence_num: req.body.proc_sequence_num,
            proc_type: req.body.proc_type,
            proc_action: req.body.proc_action,
        })
        .then(eq_type_proc => res.status(201).send(eq_type_proc))
        .catch(error => res.status(400).send(error));
    },

    list(req,res) {
        return medical_equipment_type_proc
        .findAll()
        .then(eq_type_procs => res.status(200).send(eq_type_procs))
        .catch(error => res.status(400).send(error));
    },

    retrieve(req,res) {
        return medical_equipment_type_proc
        .findById(req.params.type_proc_id)
        .then(eq_type_proc => {
            if (!eq_type_proc) {
                return res.status(404).send({
                    msg: 'Medical Equipment Type Procedure Not Found'
                });
            }
            return res.status(200).send(eq_type_proc);
        })
        .catch(error => res.status(400).send(error));
    },

    update(req,res) {
        return medical_equipment_type_proc
        .findById(req.params.type_proc_id)
        .then(eq_type_proc => {
            if (!eq_type_proc) {
                return res.status(404).send({
                    msg: 'Medical Equipment Type Procedure Not Found'
                });
            }
            return eq_type_proc
            .update({
                proc_sequence_num: req.body.proc_sequence_num || eq_type_proc.proc_sequence_num,
                proc_type: req.body.proc_type || eq_type_proc.proc_type,
                proc_action: req.body.proc_action || eq_type_proc.proc_action,
            })
            .then(() => res.status(200).send(eq_type_proc))
            .catch((error) => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    },

    destroy(req,res) {
        return medical_equipment_type_proc
        .findById(req.params.type_proc_id)
        .then(eq_type_proc => {
            if (!eq_type_proc) {
                return res.status(404).send({
                    msg: 'Medical Equipment Type Procedure Not Found'
                });
            }
            return eq_type_proc
            .destroy
            .then(() => res.status(204).send(eq_type_proc))
            .catch((error) => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    }
};