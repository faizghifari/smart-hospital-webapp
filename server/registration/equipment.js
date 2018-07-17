const medical_equipments_model = require('../models').medical_equipments;

module.exports = {
    calculate_mt_options(equipment_value) {
        let res;
        if (equipment_value < 1000) {
            res = 1;
        } else
        if (equipment_value > 50000) {
            res = 3;
        } else {
            res = 2;
        }
        return res;
    },

    create(req,res) {
        let mt_options = this.calculate_mt_options(req.body.equipments_value);

        return medical_equipments_model
        .create({
            equipments_name: req.body.equipments_name,
            equipments_desc: req.body.equipments_desc,
            equipments_sn: req.body.equipments_sn,
            equipments_qrcode: req.body.equipments_qrcode,
            equipments_status: req.body.equipments_status || false,
            equipments_lifetime: req.body.equipments_lifetime,
            equipments_value: req.body.equipments_value,
            production_date: req.body.production_date,
            is_active: req.body.is_active,
            is_on: req.body.is_on || false,
            maintenance_options: mt_options,
            current_safety: req.body.current_safety || 0,
            current_security: req.body.current_security || 0,
            current_productivity: req.body.current_productivity || 0,
            equipments_type_id: req.body.equipments_type_id,
            manufacturers_id: req.body.manufacturers_id,
            room_id: req.body.room_id || 0,
            pic_id: req.body.pic_id || 0,
            pic_mt_id: req.body.pic_mt_id || 0,
            pic_usage_id: req.body.pic_usage_id || 0,
        })
        .then(medical_equipment => res.status(201).send(medical_equipment))
        .catch(error => res.status(400).send(error));
    },

    list(req,res) {
        return medical_equipments_model
        .findAll()
        .then(medical_equipments => res.status(200).send(medical_equipments))
        .catch(error => res.status(400).send(error));
    },

    retrieve(req,res) {
        return medical_equipments_model
        .findById(req.params.equipment_id)
        .then(medical_equipment => {
            if (!medical_equipment) {
                return res.status(400).send({
                    msg: 'Medical Equipment Not Found',
                })
            }
            return res.status(200).send(medical_equipment);
        })
        .catch(error => res.status(400).send(error));
    },

    retrieve_details(req,res) {
        return medical_equipments_model
        .findById(req.params.equipment_id, {
            include: [{
                all: true,
            }]
        })
        .then(medical_equipment => {
            if (!medical_equipment) {
                return res.status(400).send({
                    msg: 'Medical Equipment Not Found',
                })
            }
            return res.status(200).send(medical_equipment);
        })
        .catch(error => res.status(400).send(error));
    },

    update(req,res) {
        return medical_equipments_model
        .findById(req.params.equipment_id)
        .then(medical_equipment => {
            if (!medical_equipment) {
                return res.status(400).send({
                    msg: 'Medical Equipment Not Found',
                });
            }
            
            let mt_options = medical_equipment.maintenance_options;
            if (req.body.equipments_value) {
                mt_options = this.calculate_mt_options(req.body.equipments_value);
            }

            return medical_equipment
            .update({
                equipments_name: req.body.equipments_name || medical_equipment.equipments_name,
                equipments_desc: req.body.equipments_desc || medical_equipment.equipments_desc,
                equipments_sn: req.body.equipments_sn || medical_equipment.equipments_sn,
                equipments_qrcode: req.body.equipments_qrcode || medical_equipment.equipments_qrcode,
                equipments_status: req.body.equipments_status || medical_equipment.equipments_status,
                equipments_lifetime: req.body.equipments_lifetime || medical_equipment.equipments_lifetime,
                equipments_value: req.body.equipments_value || medical_equipment.equipments_value,
                production_date: req.body.production_date || medical_equipment.production_date,
                is_active: req.body.is_active || medical_equipment.is_active,
                is_on: req.body.is_on || medical_equipment.is_on,
                maintenance_options: mt_options,
                current_safety: req.body.current_safety || medical_equipment.current_safety,
                current_security: req.body.current_security || medical_equipment.current_security,
                current_productivity: req.body.current_productivity || medical_equipment.current_productivity,
                equipments_type_id: req.body.equipments_type_id || medical_equipment.equipments_type_id,
                manufacturers_id: req.body.manufacturers_id || medical_equipment.manufacturers_id,
                room_id: req.body.room_id || medical_equipment.room_id,
                pic_id: req.body.pic_id || medical_equipment.pic_id,
                pic_mt_id: req.body.pic_mt_id || medical_equipment.pic_mt_id,
                pic_usage_id: req.body.pic_usage_id || medical_equipment.pic_usage_id,
            })
            .then(() => res.status(204).send(medical_equipment))
            .catch((error) => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    },

    destroy(req,res) {
        return medical_equipments_model
        .findById(req.params.equipment_id)
        .then(medical_equipment => {
            if (!medical_equipment) {
                return res.status(400).send({
                    msg: 'Medical Equipment Not Found',
                });
            }
            return medical_equipment
            .destroy()
            .then(() => res.status(204).send(medical_equipment))
            .catch((error) => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    }
};