const users = require('../models').users
const jwtLogin = require('jwt-login');
const bcrypt = require('bcryptjs');
const randomize = require('randomatic');
const nodemailer = require('nodemailer');


module.exports = {
    verify(req, res) {
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
                    module.exports.update_send_pin(result.id); 
                }
            }
        });
    },

    login(req, res) {
        var data = req.body;
        var user = data.username;
        var pin = data.pin;

        users
        .findOne({
            where: {username: user}
        })
        .then(result => {
            if(result.login_pin == pin){
                jwtLogin.sign(req, res, user, "topsecret", 1, false);
            } else {
                res.send('Incorrect PIN!')
            }
        });
    },

    verification_email(result_id, result_email, result_username) {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'elife.shams@gmail.com',
                clientId: '574528498093-tnoa0isa32bp25h5fa54oim1suif2p3n.apps.googleusercontent.com',
                clientSecret: 'LwzLbhk772wOCf4bbomyGloT',
                refreshToken: '1/StRPKZcDYp4aLkF5mVD84IrdxFIV8eWu-JnoTF7QP0o',
                accessToken: 'ya29.GlsHBu6nK4kkLMcDkmbh7ePXRNqpozn6gY3dL3jUb0CbUPf9r4hV6Gy16ktzdO2nBo5WE8EAFJtPGUW3xFdBh9pDuPUdBUxEokFHTEyf0KZ93uF84-fD4wT_foyE'        
            },
        });

        var mailOptions = {
            from: 'Smart Healthcare <elife.shams@gmail.com>',
            to: 'arinanda.adib@gmail.com',
            subject: 'Verify it\'s you!',
            text: 'Hey ' + result_username + '! Your verification code is ' + result_id
        };
         
        transporter.sendMail(mailOptions, function(err, res) {
            if(err) {
                console.log('error');
            } else {
                console.log('email sent!');
            }
        });  
    },

    update_send_pin(user_id) {
        let generated_pin = randomize('0', 6);
        users
        .findById(user_id)
        .then(result => {
            result
            .update({
                login_pin: generated_pin
            })
            .catch((error) => console.log(error));
            module.exports.verification_email(result.login_pin, result.email, result.username);
        })
        .catch(error => console.log(error));
    },

    logout(req, res) {
        jwtLogin.signout(req, res, false);
    },
}