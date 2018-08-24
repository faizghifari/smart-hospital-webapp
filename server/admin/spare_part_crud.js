const spare_part_model = require('../models').spare_part;

module.exports = {
    create(req,res) {
        return spare_part_model
            .create({
                part_name: req.body.part_name,
                part_desc: req.body.part_desc,
                part_sn: req.body.part_sn,
                part_qrcode: req.body.part_qrcode,
                part_qty: req.body.part_qty,
                part_type_id: req.body.part_type_id,
                hospital_id: req.params.hospital_id
            })
            .then(spare_part => res.status(201).send(spare_part))
            .catch(error => res.status(400).send(error));
    },

    list(req,res) {
        return spare_part_model
            .findAll()
            .then(spare_parts => res.status(200).send(spare_parts))
            .catch(error => res.status(400).send(error));
    },

    list_hospital(req,res) {
        return spare_part_model
            .findAll({
                where: {
                    hospital_id: req.params.hospital_id
                }
            })
            .then(spare_parts => res.status(200).send(spare_parts))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req,res) {
        return spare_part_model
            .findById(req.params.part_id)
            .then(spare_part => res.status(200).send(spare_part))
            .catch(error => res.status(400).send(error));
    },

    retrieve_sn(req,res) {
        return spare_part_model
            .findOne({
                where: {
                    hospital_id: req.params.hospital_id,
                    part_sn: req.params.part_sn
                }
            })
            .then(spare_part => res.status(200).send(spare_part))
            .catch(error => res.status(400).send(error));
    },

    retrieve_qrcode(req,res) {
        return spare_part_model
            .findOne({
                where: {
                    hospital_id: req.params.hospital_id,
                    part_qrcode: req.params.part_qrcode
                }
            })
            .then(spare_part => res.status(200).send(spare_part))
            .catch(error => res.status(400).send(error));
    },

    update(req,res) {
        return spare_part_model
            .findById(req.params.part_id)
            .then(spare_part => {
                if (!spare_part) {
                    return res.status(404).send({
                        msg: 'Spare Part Not Found'
                    });
                }
                return spare_part
                    .update({
                        part_name: req.body.part_name || spare_part.part_name,
                        part_desc: req.body.part_desc || spare_part.part_desc,
                        part_sn: req.body.part_sn || spare_part.part_sn,
                        part_qrcode: req.body.part_qrcode || spare_part.part_qrcode,
                        part_qty: req.body.part_qty || spare_part.part_qty,
                        part_type_id: req.body.part_type_id || spare_part.part_type_id,
                        hospital_id: req.params.hospital_id || spare_part.hospital_id
                    })
                    .then (() => res.status(200).send(spare_part))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    update_sn(req,res) {
        return spare_part_model
            .findOne({
                where: {
                    hospital_id: req.params.hospital_id,
                    part_sn: req.params.part_sn
                }
            })
            .then(spare_part => {
                if (!spare_part) {
                    return res.status(404).send({
                        msg: 'Spare Part Not Found'
                    });
                }
                return spare_part
                    .update({
                        part_name: req.body.part_name || spare_part.part_name,
                        part_desc: req.body.part_desc || spare_part.part_desc,
                        part_sn: req.body.part_sn || spare_part.part_sn,
                        part_qrcode: req.body.part_qrcode || spare_part.part_qrcode,
                        part_qty: req.body.part_qty || spare_part.part_qty,
                        part_type_id: req.body.part_type_id || spare_part.part_type_id,
                        hospital_id: req.params.hospital_id || spare_part.hospital_id
                    })
                    .then (() => res.status(200).send(spare_part))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    update_qrcode(req,res) {
        return spare_part_model
            .findOne({
                where: {
                    hospital_id: req.params.hospital_id,
                    part_qrcode: req.params.part_qrcode
                }
            })
            .then(spare_part => {
                if (!spare_part) {
                    return res.status(404).send({
                        msg: 'Spare Part Not Found'
                    });
                }
                return spare_part
                    .update({
                        part_name: req.body.part_name || spare_part.part_name,
                        part_desc: req.body.part_desc || spare_part.part_desc,
                        part_sn: req.body.part_sn || spare_part.part_sn,
                        part_qrcode: req.body.part_qrcode || spare_part.part_qrcode,
                        part_qty: req.body.part_qty || spare_part.part_qty,
                        part_type_id: req.body.part_type_id || spare_part.part_type_id,
                        hospital_id: req.params.hospital_id || spare_part.hospital_id
                    })
                    .then (() => res.status(200).send(spare_part))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy(req,res) {
        return spare_part_model
            .findById(req.params.part_id)
            .then(spare_part => {
                if (!spare_part) {
                    return res.status(404).send({
                        msg: 'Spare Part Not Found'
                    });
                }
                return spare_part
                    .destroy()
                    .then (() => res.status(204).send(spare_part))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
};