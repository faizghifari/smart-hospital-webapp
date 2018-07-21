const users = require('../models').users
const roles = require('../models').roles
const hospitals = require('../models').hospitals
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = {

    //DONT FORGET TO COMMENT ALL SEED FUNCTION IF ALL SEED ROUTES ARE COMMENTED, VICE VERSA
    // seedRole(req, res) {
    //     return roles
    //     .create({
    //         scope: req.body.scope,
    //         hospital_id: req.body.hospital_id,
    //     })
    //     .then(role=> res.status(200).send(role))
    //     .catch(error=> res.status(400).send(error));
    // },

    // seedHospital(req, res) {
    //     return hospitals
    //     .create({
    //         hospital_name: 'rumahsakit',
    //         count_buildings: '1',
    //         count_rooms: '1',
    //         current_safety: '1',
    //         current_security: '1',
    //         current_productivity: '1'

    //     })
    //     .then(hospital=> res.status(200).send(hospital))
    //     .catch(error=> res.status(400).send(error));
    // },

    // async seedUser(req,res) {
    //     const hash = await bcrypt.hash('admin', 10);

    //     return users
    //     .create({
    //         email: 'tes@tes.com',
    //         username: 'tes',
    //         password_hash: hash,
    //         is_ministry: false,
    //         is_admin: false,
    //         role_id: '1',
    //         hospital_id: '1'
    //     })
    //     .then(user=> res.status(201).send(user))
    //     .catch(error => res.status(400).send(error));        
    // },

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