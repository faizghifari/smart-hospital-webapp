const models = require('../models');
const user_model = require('../models').users;

module.exports = {
    list_engineer(req,res) {
        return user_model
            .findAll({
                include: [{
                    model: models.roles,
                    as: 'role',
                    where: {
                        scope: 'Engineer'
                    }
                }],
                attributes: ['id', 'username'],
                where: {
                    hospital_id: req.params.hospital_id
                }
            })
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error));
    }
};