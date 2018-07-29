const login = require('../login/login_controller');

module.exports = (app) => {
    app.post('/login', login.login);
    app.post('/login/verify', login.verify);
    app.get('/logout', login.logout);    
}