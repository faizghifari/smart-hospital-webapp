const seeder_controller = require('./seeder_controller');

module.exports = (app) => {
    app.get('/seed', seeder_controller.seed);    
};