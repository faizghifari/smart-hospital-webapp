const users = require('../models').users;
const randomize = require('randomatic');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

module.exports = {
    
    async register(req, res) {
        let generated_password = randomize('A0', 12);
        var data = req.body;
        let password = await bcrypt.hash(generated_password, 10);

          users
            .create({
                fullname: data.fullname,
                username: data.username,
                staffId: data.staffId,
                email: data.email,
                role_id: data.role,
                hospital_id: data.hospital_id,
                dep_id: data.dep_id,
                password_hash: password
            })
            .then(user => res.status(200))
            .catch(error => console.log(error))
        module.exports.verification_email(data.username, generated_password,data.email);
    },

    async verification_email(username, password,email) {
        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
                        auth: {
                            user: 'elife.shams@gmail.com',
                            pass: 'els12345'
                    },
        });

        var mailOptions = {
            from: 'elife.shams@gmail.com',
            to: email,
            subject: 'Your Username and Password for SMEMS',
            text: 'Username: ' + username + '\n\nPassword: ' + password + '\n\nThankyou'
        };
         
        transporter.sendMail(mailOptions, function(err) {
            if(err) {
                console.log('error');
            } else {
                console.log('email sent!');
            }
        });  
    },

};