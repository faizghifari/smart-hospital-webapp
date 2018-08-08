const safety = require('./safety');
const security = require('./security');
const productivity = require('./productivity');

module.exports = (app) => {
    app.put('/:hospital_id/equipment/:equipment_id/productivity/usage',     productivity.receive_usage);

    app.put('/:hospital_id/equipment/:equipment_id/security/position/raw',  security.receive_raw_pos);
    app.put('/:hospital_id/equipment/:equipment_id/security/pic',           security.receive_pic);
    app.put('/:hospital_id/equipment/:equipment_id/security/position',      security.receive_pos);

    app.put('/:hospital_id/equipment/:equipment_id/safety/maintenance',     safety.receive_mt);
    app.put('/:hospital_id/equipment/:equipment_id/safety/report',          safety.receive_report);
};