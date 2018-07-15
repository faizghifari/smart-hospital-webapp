const auth_controller = require('./auth_controller');

module.exports = (app) => {
    app.post('/api/auth/get_token', auth_controller.getToken);
    app.post('/api/auth/seed_user', auth_controller.seedUser);  
    app.get('/api/auth/test', auth_controller.test);
};