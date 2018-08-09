const moment = require('moment');

const medical_equipments_booking_model = require('../models').medical_equipments_booking;
const booking = require('./booking');

module.exports = {
    async validate_usage(booking_id) {
        let booking_data = await module.exports.retrieve_booking(booking_id);
        let now = moment();

        if (moment(now).isBetween(booking_data.start_time, booking_data.end_time)) {
            return true;
        } else {
            return false;
        }
    },

    async receive_usage(req,res) {
        let is_validated = await module.exports.validate_usage(req.params.booking_id);
        if (is_validated) {
            let data = {
                'booking_id': req.params.booking_id,
                'is_usage': true
            };

            let result = await booking.update_booking(data);

            let result_stringified = JSON.stringify(result);
            return res.status(200).send(result_stringified);
        } else {
            return res.status(401).send({
                msg: 'Invalid usage. Please wait until start time'
            });
        }
    },

    async receive_closed_usage(req,res) {
        let data = {
            'booking_id': req.params.booking_id,
            'is_usage': null
        };

        let result = await booking.update_booking(data);

        let result_stringified = JSON.stringify(result);
        return res.status(200).send(result_stringified);
    },

    retrieve_booking(booking_id) {
        return new Promise((resolve,reject) => {
            medical_equipments_booking_model
                .findById(booking_id)
                .then(booking => resolve(booking))
                .catch(error => reject(error));
        });
    }
};