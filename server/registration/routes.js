const equipment = require('./equipment');
const role_controller = require('../role/role_controller');

module.exports = (app) => {
    app.post('/api/equipment/registration', equipment.create);
    app.get('/api/equipment', role_controller.valid_login, role_controller.role_check, equipment.list);
    app.get('/api/equipment/:equipment_id', equipment.retrieve);
    app.get('/api/equipment/:equipment_id/details', equipment.retrieve_details);
    app.put('/api/equipment/:equipment_id', equipment.update);
    app.delete('/api/equipment/:equipment_id', equipment.destroy);
};
