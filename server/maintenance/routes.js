const proc_controller = require('./proc_controller');

module.exports = (app) => {

    app.post('/api/mt/proc', proc_controller.create);
    app.get('/api/mt/proc', proc_controller.list);
    app.get('/api/mt/proc/:type_proc_id', proc_controller.retrieve);
    app.put('/api/mt/proc/:type_proc_id', proc_controller.update);
    app.delete('/api/mt/proc/:type_proc_id', proc_controller.destroy);
};