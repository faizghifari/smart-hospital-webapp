const users = require('../models').users
const jwtLogin = require('jwt-login');
const bcrypt = require('bcryptjs');
const randomize = require('randomatic');

module.exports = {
    login(req, res) {
        var data = req.body;
        var user = data.username;
        var password = data.password;

        users
        .findOne({
            where: {username: user}
        })
        .then(async result => {
            if (!result) {
                return res.status(400).send('User not found'); 
            } else if(result) {
                const matches = await bcrypt.compare(password, result.password_hash);
                if (!matches) {
                    return res.status(400).send('Auth failed. Wrong password.');   
                } else {
                    module.exports.update_pin(result.id);
                    jwtLogin.sign(req, res, user, "topsecret", 1, false);
                }
            }
        });
    },

    update_pin(user_id) {
        let generated_pin = randomize('0', 6);
        users
        .findById(user_id)
        .then(result => {
            result
            .update({
                login_pin: generated_pin
            })
            .catch((error) => console.log(error));
        })
        .catch(error => console.log(error));
    },

    logout(req, res) {
        jwtLogin.signout(req, res, false);
    },
}