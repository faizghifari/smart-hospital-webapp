const users = require('../models').users
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    test(req, res) {
        return res.status(200).send('hello world');
    },

    async seedUser(req,res) {
        const hash = await bcrypt.hash(req.body.password, 10);

        return users
        .create({
            email: req.body.email,
            username: req.body.username,
            password_hash: hash,
            is_ministry: req.body.is_ministry,
            is_admin: req.body.is_admin
        })
        .then(user=> res.status(201).send(user))
        .catch(error => res.status(400).send(error));        
    },

    getToken(req, res) {
        if (!req.body.username || !req.body.password) {
            return res.status(401).send('Fields not sent');
        }

       return users
       .findOne({
           where: {username: req.body.username}
       })
       .then(async result => {
           if (!result) {
               return res.status(400).send('User not found');
           } else if(result) {
               const matches = await bcrypt.compare(req.body.password, result.password_hash);
               if (!matches) {
                return res.status(400).send('Auth failed. Wrong password.');
               } else {
                const payload = { id: users.id };
                const token = jwt.sign(payload, 'secretKey', { expiresIn: 86400 });
                res.send(token);
               }
           }
       });
    }
};