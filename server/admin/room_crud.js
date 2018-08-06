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
    }
};