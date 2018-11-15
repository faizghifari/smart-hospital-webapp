const auth_controller = require('./auth_controller');
const cors = require('cors');

module.exports = (app) => {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });

    app.post('/api/auth/get_token', auth_controller.getToken);    
};