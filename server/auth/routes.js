const auth_controller = require('./auth_controller');

module.exports = (app) => {
    app.post('/api/auth/get_token', auth_controller.getToken);
};