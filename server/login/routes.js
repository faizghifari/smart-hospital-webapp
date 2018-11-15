const login = require('../login/login_controller');
const cors = require('cors');
module.exports = (app) => {
    //cors

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });
      
    app.post('/login', login.login);
    app.post('/login/verify', login.verify);
    app.get('/logout', login.logout);    
};