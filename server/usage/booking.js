const moment = require('moment');

const medical_equipments_booking_model = require('../models').medical_equipments_booking;

module.exports = {
    async validate_booking(data, hospital_id) {
        let booking_list = await module.exports.retrieve_equipment_bookings(data, hospital_id);
        booking_list.forEach(booking => {
            if (moment(data.start_time).isBetween(booking.start_time, booking.end_time) || 
                moment(data.end_time).isBetween(booking.start_time, booking.end_time) || 
                moment(booking.start_time).isBetween(data.start_time, data.end_time) || 
                moment(booking.end_time).isBetween(data.start_time, data.end_time)) {
                
                return false;
            }
        });
    },

    async receive_booking(req,res) {
        let is_validated = await module.exports.validate_booking(req.body, req.params.hospital_id);
        if (is_validated) {
            let booking = await module.exports.create(req.body);

            return res.status(201).send(booking);
        } else {
            return res.status(400).send({
                msg: 'Booking time is not available'
            });
        }

    },

    create(data) {
        return new Promise((resolve,reject) => {
            medical_equipments_booking_model
                .create({
                    start_time: data.start_time,
                    end_time: data.end_time,
                    purpose: data.purpose,
                    is_used: data.is_used || false,
                    user_id: data.user_id,
                    equipment_id: data.equipment_id,
                    room_id: data.room_id,
                    hospital_id: data.hospital_id
                })
                .then(booking => resolve(booking))
                .catch(error => reject(error));
        }); 
    },

    list(req,res) {
        return medical_equipments_booking_model
            .findAll()
            .then(bookings => res.status(200).send(bookings))
            .catch(error => res.status(400).send(error));
    },

    list_hospital(req,res) {
        return medical_equipments_booking_model
            .findAll({
                where: {
                    hospital_id: req.params.hospital_id
                }
            })
            .then(bookings => res.status(200).send(bookings))
            .catch(error => res.status(400).send(error));
    },

    list_hospital_used(req,res) {
        return medical_equipments_booking_model
            .findAll({
                where: {
                    hospital_id: req.params.hospital_id,
                    is_used: true
                }
            })
            .then(bookings => res.status(200).send(bookings))
            .catch(error => res.status(400).send(error));
    },

    list_hospital_unused(req,res) {
        return medical_equipments_booking_model
            .findAll({
                where: {
                    hospital_id: req.params.hospital_id,
                    is_used: false
                }
            })
            .then(bookings => res.status(200).send(bookings))
            .catch(error => res.status(400).send(error));
    },

    list_hospital_closed(req,res) {
        return medical_equipments_booking_model
            .findAll({
                where: {
                    hospital_id: req.params.hospital_id,
                    is_used: null
                }
            })
            .then(bookings => res.status(200).send(bookings))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req,res) {
        return medical_equipments_booking_model
            .findById(req.params.booking_id)
            .then(booking => res.status(200).send(booking))
            .catch(error => res.status(400).send(error));
    },
    
    retrieve_bookings(req,res) {
        return medical_equipments_booking_model
            .findAll({
                where: {
                    hospital_id: req.params.hospital_id,
                    equipment_id: req.params.equipment_id
                }
            })
            .then(bookings => res.status(200).send(bookings))
            .catch(error => res.status(400).send(error));
    },

    retrieve_equipment_bookings(data, hospital_id) {
        return new Promise((resolve,reject) => {
            medical_equipments_booking_model
                .findAll({
                    where: {
                        hospital_id: hospital_id,
                        equipment_id: data.equipment_id
                    }
                })
                .then(bookings => resolve(bookings))
                .catch(error => reject(error));
        });
    },

    update(req,res) {
        return medical_equipments_booking_model
            .findById(req.params.booking_id)
            .then(booking => {
                return booking
                    .update({
                        start_time: req.body.start_time || booking.start_time,
                        end_time: req.body.end_time || booking.end_time,
                        purpose: req.body.purpose || booking.purpose,
                        is_used: req.body.is_used || booking.is_used,
                        user_id: req.body.user_id || booking.user_id,
                        equipment_id: req.body.equipment_id || booking.equipment_id,
                        room_id: req.body.room_id || booking.room_id,
                        hospital_id: req.params.hospital_id || booking.hospital_id
                    })
                    .then(() => res.status(200).send(booking))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    update_booking(data) {
        return new Promise((resolve,reject) => {
            medical_equipments_booking_model
                .findById(data.booking_id)
                .then(booking => {
                    booking
                        .update({
                            start_time: data.start_time || booking.start_time,
                            end_time: data.end_time || booking.end_time,
                            purpose: data.purpose || booking.purpose,
                            is_used: data.is_used,
                            user_id: data.user_id || booking.user_id,
                            equipment_id: data.equipment_id || booking.equipment_id,
                            room_id: data.room_id || booking.room_id,
                            hospital_id: data.hospital_id || booking.hospital_id
                        })
                        .then(() => resolve(booking))
                        .catch((error) => reject(error));
                })
                .catch(error => reject(error));
        });
    },

    destroy(req,res) {
        return medical_equipments_booking_model
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