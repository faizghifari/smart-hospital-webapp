const users = require('../models').users
const randomize = require('randomatic');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

module.exports = {
    async register(req, res) {
        let generated_password = randomize('A0', 12);
        var data = req.body;
        let password = await bcrypt.hash(generated_password, 10);

        return users
        .create({
            fullname: data.fullname,
            username: data.username,
            staff_id: data.staff_id,
            email: data.email,
            role_id: data.role,
            hospital_id: data.hospital_id,
            dep_id: data.dep_id,
            password_hash: password
        })
        .then(user => res.status(200))
        .catch(error => console.log(error));
        module.exports.verification_email(data.username, generated_password);
    },

    verification_email(username, password) {
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
            subject: 'Your Username and Password for SMEMS',
            text: 'Username: ' + username + '\n\nPassword: ' + password + '\n\nThankyou'
        };
         
        transporter.sendMail(mailOptions, function(err, res) {
            if(err) {
                console.log('error');
            } else {
                console.log('email sent!');
            }
        });  
    },

}