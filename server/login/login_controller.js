const users = require('../models').users
const jwtLogin = require('jwt-login');
const bcrypt = require('bcryptjs');

module.exports = {
    login(req, res) {
        var data = req.body;
        var user = data.username;
        var password = data.password;

        console.log(user, password);

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
    }
}