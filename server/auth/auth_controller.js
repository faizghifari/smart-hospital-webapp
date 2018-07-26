const users = require('../models').users;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = {
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
                        const generated_token = jwt.sign(payload, 'secretKey', { expiresIn: 10800 }); 
                        const role_id = result.role_id;
                        const hospital_id = result.hospital_id; 
                        res.send(JSON.stringify({token: generated_token, role: role_id, hospital: hospital_id}));
                    }
                }
            });
    }
};