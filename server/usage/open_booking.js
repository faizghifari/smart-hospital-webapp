const open_booking = require('../models').open_booking;

const util = require('./utils');

module.exports = {
    create(req,res) {
        return open_booking
            .create({
                start_time: req.body.start_time,
                end_time: req.body.end_time || null,
                purpose: req.body.purpose,
                user_id: req.body.user_id,
                equipment_id: req.body.equipment_id,
                room_id: req.body.room_id,
                hospital_id: req.params.hospital_id
            })
            .then(booking => {
                booking.is_available = false;
                util.update_availability(booking);
                
                return res.status(201).send(booking);
            })
            .catch(error => res.status(error));
    },

    list_open(req,res) {
        return open_booking
            .findAll({
                where: {
                    hospital_id: req.params.hospital_id,
                    end_time: null
                }
            })
            .then(bookings => res.status(200).send(bookings))
            .catch(error => res.status(400).send(error));
    },

    list_closed(req,res) {
        return open_booking
            .findAll({
                where: {
                    hospital_id: req.params.hospital_id,
                    end_time: {
                        [Op.ne]: null
                    }
                }
            })
            .then(bookings => res.status(200).send(bookings))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req,res) {
        return open_booking
            .findById(req.params.booking_id)
            .then(booking => res.status(200).send(booking))
            .catch(error => res.status(400).send(error));
    },

    close(req,res) {
        return open_booking
            .findById(req.params.booking_id)
            .then(booking => {
                booking.is_available = true;
                util.update_availability(booking);

                return booking
                    .update({
                        end_time: req.body.end_time,
                    })
                    .then(() => res.status(200).send(booking))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy(req,res) {
        return open_booking
            .findById(req.params.booking_id)
            .then(booking => {
                return booking
                    .destroy()
                    .then(() => res.status(204).send(booking))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
};