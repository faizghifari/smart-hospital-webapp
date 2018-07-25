const users = require('../models').users
const jwtLogin = require('jwt-login');
const bcrypt = require('bcryptjs');
const randomize = require('randomatic');

module.exports = {
    login(req, res) {
        var data = req.body;
        var user = data.username;
        var password = data.password;

        pin = randomize('0', 6);
        
        users
        .findOne({
            where: {username: user}
        })
        .then(async result => {
            if (!result) {
                return res.status(400).send('User not found'); //if user not in DB
            } else if(result) {
                const matches = await bcrypt.compare(password, result.password_hash); //validate the password
                if (matches) {
                    jwtLogin.sign(req, res, user, "topsecret", 1, false);
                } else {
                    return res.status(400).send('Auth failed. Wrong password.');   
                }
            }
        });
    },

    logout(req, res) {
        jwtLogin.signout(req, res, false);
    },
}