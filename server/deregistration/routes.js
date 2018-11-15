const disposal_request = require('./disposal_request');
const disposal_report = require('./disposal_report');
const disposal_equipment = require('./disposal_equipment');
const cors = require('cors');
module.exports = (app) => {

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });
      

    app.get(    '/disposal/request',                                        disposal_request.list);
    app.get(    '/disposal/request/approved',                               disposal_request.list_approved);
    app.get(    '/disposal/request/rejected',                               disposal_request.list_rejected);

    app.get(    '/disposal/report',                                         disposal_report.list);
    app.get(    '/disposal/report/open',                                    disposal_report.list_open);
    app.get(    '/disposal/report/closed',                                  disposal_report.list_closed);

    app.get(    '/disposal/equipment',                                      disposal_equipment.list);

    app.get(    '/:hospital_id/disposal/request',                           disposal_request.list_hospital);
    app.get(    '/:hospital_id/disposal/request/approved',                  disposal_request.list_hospital_approved);
    app.get(    '/:hospital_id/disposal/request/rejected',                  disposal_request.list_hospital_rejected);
    app.get(    '/:hospital_id/disposal/request/sn/:requst_sn',             disposal_request.retrieve_sn);
    app.put(    '/:hospital_id/disposal/request/sn/:requst_sn',             disposal_request.update_sn);
    app.delete( '/:hospital_id/disposal/request/sn/:requst_sn',             disposal_request.destroy_sn);
    app.get(    '/:hospital_id/disposal/:request_id/request',               disposal_request.retrieve);
    app.put(    '/:hospital_id/disposal/:request_id/request',               disposal_request.update);
    app.delete( '/:hospital_id/disposal/:request_id/request',               disposal_request.destroy);

    app.get(    '/:hospital_id/disposal/report',                            disposal_report.list_hospital);
    app.get(    '/:hospital_id/disposal/report/open',                       disposal_report.list_hospital_open);
    app.get(    '/:hospital_id/disposal/report/closed',                     disposal_report.list_hospital_closed);
    app.get(    '/:hospital_id/disposal/report/sn/:disposal_sn',            disposal_report.retrieve_sn);
    app.put(    '/:hospital_id/disposal/report/sn/:disposal_sn',            disposal_report.update_sn);
    app.delete( '/:hospital_id/disposal/report/sn/:disposal_sn',            disposal_report.destroy_sn);
    app.get(    '/:hospital_id/disposal/:report_id/report',                 disposal_report.retrieve);
    app.put(    '/:hospital_id/disposal/:report_id/report',                 disposal_report.update);
    app.delete( '/:hospital_id/disposal/:report_id/report',                 disposal_report.destroy);

    app.get(    '/:hospital_id/disposal/equipment',                         disposal_equipment.list_hospital);
    app.get(    '/:hospital_id/disposal/:disposed_equipment_id/equipment',  disposal_equipment.retrieve);
    app.put(    '/:hospital_id/disposal/:disposed_equipment_id/equipment',  disposal_equipment.update);
    app.delete( '/:hospital_id/disposal/:disposed_equipment_id/equipment',  disposal_equipment.destroy);
};