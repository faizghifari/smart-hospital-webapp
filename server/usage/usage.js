const moment = require('moment');

const medical_equipments_booking_model = require('../models').medical_equipments_booking;
const productivity = require('../monitoring/productivity');

const booking = require('./booking');
const util = require('./utils');

module.exports = {
    async validate_usage(booking_id) {
        let booking_data = await module.exports.retrieve_booking(booking_id);
        let now = moment();

        let result = false;
        if (moment(now).isBetween(booking_data.start_time, booking_data.end_time)) {
            result = true;
        }
        booking_data.result = result;

        return booking_data;
    },

    async receive_usage(req,res) {
        let booking_data = await module.exports.validate_usage(req.params.booking_id);
        if (booking_data.result) {
            let data = {
                'booking_id': req.params.booking_id,
                'is_usage': true
            };

            let usage_update = await productivity.receive_usage(booking_data);
            let result = await booking.update_booking(data);

            booking_data.is_available = false;
            util.update_availability(booking_data);

            result.usage = usage_update;
            
            let result_stringified = JSON.stringify(result);
            return res.status(200).send(result_stringified);
        } else {
            return res.status(401).send({
                msg: 'Invalid usage. Please wait until start time'
            });
        }
    },

    async receive_closed_usage(req,res) {
        let booking_data = module.exports.retrieve_booking(req.params.booking_id);
        let data = {
            'booking_id': req.params.booking_id,
            'is_usage': null
        };

        booking_data.is_available = true;
        util.update_availability(booking_data);

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