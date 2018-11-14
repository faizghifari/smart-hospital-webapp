const equipment = require('./equipment');
const role_controller = require('../role/role_controller');

module.exports = (app) => {
    app.get(    '/equipment', equipment.list);

    app.get(    '/:hospital_id/equipment', role_controller.valid_login, role_controller.role_check, equipment.list_hospital);

    app.post(   '/:hospital_id/equipment/registration', role_controller.valid_login, role_controller.role_check, equipment.create);

    app.get(    '/:hospital_id/equipment/sn/:equipments_sn',            role_controller.valid_login, role_controller.role_check, equipment.retrieve_sn);
    app.put(    '/:hospital_id/equipment/sn/:equipments_sn',            role_controller.valid_login, role_controller.role_check, equipment.update_sn);
    app.get(    '/:hospital_id/equipment/sn/details/:equipments_sn',    role_controller.valid_login, role_controller.role_check, equipment.retrieve_details_sn);

    app.get(    '/:hospital_id/:equipment_id/equipment',            role_controller.valid_login, role_controller.role_check, equipment.retrieve);
    app.put(    '/:hospital_id/:equipment_id/equipment',            role_controller.valid_login, role_controller.role_check, equipment.update);
    app.delete( '/:hospital_id/:equipment_id/equipment',            role_controller.valid_login, role_controller.role_check, equipment.destroy);
    app.get(    '/:hospital_id/:equipment_id/equipment/details',    role_controller.valid_login, role_controller.role_check, equipment.retrieve_details);
};
