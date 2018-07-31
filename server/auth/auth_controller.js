const users = require('../models').users
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = {
    getToken(req, res) {
        if (!req.body.username || !req.body.password) {
            return res.status(401).send('Fields not sent');
        }

       return users
       .findOne({
           where: {username: req.body.username} //find the username in the DB
       })
       .then(async result => {
           if (!result) {
               return res.status(400).send('User not found'); //if user not in DB
           } else if(result) {
               const matches = await bcrypt.compare(req.body.password, result.password_hash); //validate the password
               if (!matches) {
                return res.status(400).send('Auth failed. Wrong password.');
               } else {
                const payload = { id: users.id };
                const generated_token = jwt.sign(payload, 'secretKey', { expiresIn: 10800 }); //token expires in 3hrs
                const role_id = result.role_id; //fetch role_id
                const hospital_id = result.hospital_id; //fetch hospital_id
                res.send(JSON.stringify({token: generated_token, role: role_id, hospital: hospital_id}));
               }
           }
       });
    }
};