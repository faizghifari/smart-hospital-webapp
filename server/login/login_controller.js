const users = require('../models').users;
const jwtLogin = require('jwt-login');
const bcrypt = require('bcryptjs');
const randomize = require('randomatic');
const nodemailer = require('nodemailer');
const requestIp = require('request-ip');
const publicIp = require('public-ip');
const where = require('node-where');
const schedule = require('node-schedule');

module.exports = {
    get_client_ip() {
        return new Promise((resolve) => {
            publicIp.v4().then(ip => {
                resolve(ip);
            });
        });
    },

    async verify(req, res) {
        var data = req.body;
        var user = data.username;
        var password = data.password;
        var clientIp = await module.exports.get_client_ip();        
        const ip = (requestIp.getClientIp(req)).substr(7);

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
                        module.exports.update_send_pin(result.id, clientIp, ip); 
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
                    jwtLogin.sign(req, res, user, 'topsecret', 1, false);
                } else if(result.login_pin == null) {
                    res.send('Session expired. Please login again.');
                } else {
                    res.send('Incorrect PIN!');
                }
            });
    },

    async verification_email(result_id, result_email, result_username, clientIp, ip) {

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
            text: 
            'Hey ' + result_username + '!\n\nPlease verify that it’s you.\n\nUse the following code to confirm your identity:\n\n' + 
            result_id + '\n\n' + 'Here are the details of the sign-in attempt:\n' + new Date() + '\nAccount: ' + result_email + 
            '\nLocation: ' + await module.exports.get_client_city(clientIp) + ', ' + await module.exports.get_client_region(clientIp) + ', ' + await module.exports.get_client_country(clientIp) + ' ' +  await module.exports.get_client_zip(clientIp) +
            '\nIP Address: ' + clientIp + ' / ' + ip +
            '\nLatitude: ' + await module.exports.get_client_lat(clientIp) +
            '\nLongitude: ' + await module.exports.get_client_lng(clientIp)
        };
         
        transporter.sendMail(mailOptions, function(err) {
            if(err) {
                console.log('error');
            } else {
                console.log('email sent!');
            }
        });  
    },

    async update_send_pin(user_id, clientIp, ip) {
        let generated_pin = randomize('0', 6);
        var client_ip = await module.exports.get_client_ip();
        
        
        users
            .findById(user_id)
            .then(result => {
                result
                    .update({
                        login_pin: generated_pin
                    })
                    .catch((error) => console.log(error));
                module.exports.verification_email(result.login_pin, result.email, result.username, client_ip, ip);
                module.exports.login_pin_expiry(user_id);
            })
            .catch(error => console.log(error));
    },

    login_pin_expiry(user_id) {
        let expiryTime = new Date(Date.now() + 300000);
        
        schedule.scheduleJob(expiryTime, function() {
            users
                .findById(user_id)
                .then(result => {
                    result
                        .update({
                            login_pin: null
                        })
                        .catch((error) => console.log(error));
                })
                .catch(error => console.log(error));
        });
    },

    get_client_city(clientIp) {
        return new Promise((resolve) => {
            where.is(clientIp, function(err, result) {
                resolve(result.get('city'));
            }); 
        });
    },

    get_client_region(clientIp) {
        return new Promise((resolve) => {
            where.is(clientIp, function(err, result) {
                resolve(result.get('region'));
            }); 
        });
    },

    get_client_country(clientIp) {
        return new Promise((resolve) => {
            where.is(clientIp, function(err, result) {
                resolve(result.get('country'));
            }); 
        });
    },

    get_client_zip(clientIp) {
        return new Promise((resolve) => {
            where.is(clientIp, function(err, result) {
                resolve(result.get('postalCode'));
            }); 
        });
    },

    get_client_lat(clientIp) {
        return new Promise((resolve) => {
            where.is(clientIp, function(err, result) {
                resolve(result.get('lat'));
            }); 
        });
    },

    get_client_lng(clientIp) {
        return new Promise((resolve) => {
            where.is(clientIp, function(err, result) {
                resolve(result.get('lng'));
            }); 
        });
    },

    logout(req, res) {
        jwtLogin.signout(req, res, false);
    },
};