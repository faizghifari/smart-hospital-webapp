const equipment = require('./equipment');

module.exports = (app) => {
    app.post('/api/equipment/registration', equipment.create);
    app.get('/api/equipment', equipment.list);
    app.get('/api/equipment/:equipment_id', equipment.retrieve);
    app.get('/api/equipment/:equipment_id/details', equipment.retrieve_details);
    app.put('/api/equipment/:equipment_id', equipment.update);
    app.delete('/api/equipment/:equipment_id', equipment.destroy);
};