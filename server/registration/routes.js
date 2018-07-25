const equipment = require('./equipment');
const role_controller = require('../role/role_controller');

module.exports = (app) => {
    app.post('/api/equipment/registration', role_controller.valid_login, role_controller.role_check, equipment.create);
    app.get('/api/equipment', role_controller.valid_login, role_controller.role_check, equipment.list);
    app.get('/api/equipment/:equipment_id', role_controller.valid_login, role_controller.role_check, equipment.retrieve);
    app.get('/api/equipment/:equipment_id/details', role_controller.valid_login, role_controller.role_check, equipment.retrieve_details);
    // app.put('/api/equipment/:equipment_id', role_controller.valid_login, role_controller.role_check, equipment.update);
    app.put('/api/equipment/:equipment_id', equipment.update);
    app.delete('/api/equipment/:equipment_id', role_controller.valid_login, role_controller.role_check, equipment.destroy);
};
