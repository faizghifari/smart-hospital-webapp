const disposal_report_model = require('../models').disposal_report;

module.exports = {
    validate_request(cm_data) {
        return cm_data.is_ber;
    },

    create(req,res) {
        if (module.exports.validate_request(req.body.cm_id)) {
            return disposal_report_model
                .create({
                    disposal_sn: req.body.disposal_sn,
                    disposal_desc: req.body.disposal_desc,
                    disposal_reason: req.body.disposal_reason,
                    hospital_id: req.params.hospital_id,
                    equipment_id: req.params.equipment_id,
                    user_id: req.body.user_id,
                    cm_id: req.body.cm_id
                })
                .then(disposal_report => res.status(201).send(disposal_report))
                .catch(error => res.status(400).send(error));
        }
    }
};