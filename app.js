const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secretKey'
};

const strategy = new JwtStrategy(opts, (payload, next) => {
    users.findOne({id: payload.id}).then(res => {
        next(null, res);
    });
})

const app = express();

app.use(logger('dev'));

passport.use(strategy);
app.use(passport.initialize());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require ('./server/auth/routes')(app);
require('./server/registration/routes')(app);

app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to Smart Hospital Server',
}));

module.exports = app;