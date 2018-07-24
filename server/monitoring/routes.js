const safety = require('./safety');
const security = require('./security');
const productivity = require('./productivity');

module.exports = (app) => {
    app.put('/api/equipment/:equipment_id/productivity/usage', productivity.receive_usage);

    app.put('/api/equipment/:equipment_id/security/position', security.receive_raw_pos);
    app.put('/api/equipment/:equipment_id/security/pic', security.receive_pic);

    app.put('/api/equipment/:equipment_id/safety/maintenance', safety.receive_mt);
    app.put('/api/equipment/:equipment_id/safety/report', safety.receive_report);

    app.get('/api/equipment/tes', security.list);
};