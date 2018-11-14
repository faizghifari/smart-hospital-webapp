const login = require('../login/login_controller');
const cors = require('cors');
module.exports = (app) => {
    //cors
    app.use(cors())

    app.post('/login', login.login,function(req,res,next){
        res.json({msg:'This is CORS-enabled for all origins!'})
    });
    app.post('/login/verify', login.verify);
    app.get('/logout', login.logout);    
};