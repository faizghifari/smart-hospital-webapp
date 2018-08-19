const disposal_equipment_model = require('../models').disposal_equipment;

module.exports = {
    create(data) {
        return disposal_equipment_model
            .create({
                equipment_details: data.equipment_details,
                disposal_reason: data.disposal_reason,
                hospital_id: data.hospital_id,
                report_id: data.report_id
            });  
    },

    list(req,res) {
        return disposal_equipment_model
            .findAll()
            .then(disposed_equipments => res.status(200).send(disposed_equipments))
            .catch(error => res.status(400).send(error));
    },

    list_hospital(req,res) {
        return disposal_equipment_model
            .findAll({
                where: {
                    hospital_id: req.params.hospital_id
                }
            })
            .then(disposed_equipments => res.status(200).send(disposed_equipments))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req,res) {
        return disposal_equipment_model
            .findById(req.params.disposed_equipment_id)
            .then(disposed_equipment => res.status(200).send(disposed_equipment))
            .catch(error => res.status(400).send(error));
    },

    update(req,res) {
        return disposal_equipment_model
            .findById(req.params.disposed_equipment_id)
            .then(disposed_equipment => {
                return disposed_equipment
                    .update({
                        equipment_details: req.body.equipment_details || disposed_equipment.equipment_details,
                        disposal_reason: req.body.disposal_reason || disposed_equipment.disposal_reason,
                        hospital_id: req.body.hospital_id || disposed_equipment.hospital_id,
                        report_id: req.body.report_id || disposed_equipment.report_id
                    })
                    .then(() => res.status(200).send(disposed_equipment))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy(req,res) {
        return disposal_equipment_model
            .findById(req.params.disposed_equipment_id)
            .then(disposed_equipment => {
                return disposed_equipment
                    .destroy()
                    .then(() => res.status(200).send(disposed_equipment))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};