const safety = require('./safety');
const security = require('./security');
const cors = require('cors');

module.exports = (app) => {

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });
      
      
    app.put('/:hospital_id/equipment/:equipment_id/security/position/raw',  security.receive_raw_pos);
    app.put('/:hospital_id/equipment/:equipment_id/security/pic',           security.receive_pic);
    app.put('/:hospital_id/equipment/:equipment_id/security/position',      security.receive_pos);

    app.put('/:hospital_id/equipment/:equipment_id/safety/maintenance',     safety.receive_mt);
    app.put('/:hospital_id/equipment/:equipment_id/safety/report',          safety.receive_report);
};