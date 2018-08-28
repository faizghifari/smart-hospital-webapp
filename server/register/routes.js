const register = require('../register/register_controller');

module.exports = (app) => {
    app.post('/register', register.register);
}