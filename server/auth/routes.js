const auth_controller = require('./auth_controller');

module.exports = (app) => {
    app.post('/api/auth/get_token', auth_controller.getToken);
    //DONT FORGET TO COMMENT ALL SEED ROUTES IF ALL SEED FUNCTION COMMENTED, VICE VERSA
    // app.post('/api/auth/seed_user', auth_controller.seedUser);
    // app.post('/api/auth/seed_role', auth_controller.seedRole);  
    // app.post('/api/auth/seed_hospital', auth_controller.seedHospital);       
};