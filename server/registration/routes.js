const eq_type_controller = require('./eq_type_controller');

module.exports = (app) => {
    
    app.post('/api/reg/eq_type', eq_type_controller.create);
    app.get('/api/reg/eq_type', eq_type_controller.list);
    app.get('/api/reg/eq_type/:type_id', eq_type_controller.retrieve)
    app.put('/api/reg/eq_type/:type_id', eq_type_controller.update)
    app.delete('/api/reg/eq_type/:type_id', eq_type_controller.destroy)
};