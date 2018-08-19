const rooms_model = require('../models').rooms;

module.exports = {
    list_hospital(req,res) {
        return rooms_model
            .findAll({
                where: {
                    hospital_id: req.params.hospital_id
                }
            })
            .then(rooms => res.status(200).send(rooms))
            .catch(error => res.status(400).send(error));
    },

    retrieve_sn(req,res) {
        return rooms_model
            .findOne({
                where: {
                    hospital_id: req.params.hospital_id,
                    room_sn: req.params.room_sn
                }
            })
            .then(room => res.status(200).send(room))
            .catch(error => res.status(400).send(error));
    },
};