const disposal_equipment = require('./disposal_equipment');
const disposal_report = require('./disposal_report');

module.exports = (app) => {
    app.get('/disposal/report',             disposal_report.list);
    app.get('/disposal/report/approved',    disposal_report.list_approved);
    app.get('/disposal/report/rejected',    disposal_report.list_rejected);

    app.get('/disposal/equipment',  disposal_equipment.list);

    app.get(    '/:hospital_id/disposal/report',            disposal_report.list_hospital);
    app.get(    '/:hospital_id/disposal/report/approved',   disposal_report.list_hospital_approved);
    app.get(    '/:hospital_id/disposal/report/rejected',   disposal_report.list_hospital_rejected);
    app.get(    '/:hospital_id/:report_id/report',          disposal_report.retrieve);
    app.put(    '/:hospital_id/:report_id/report',          disposal_report.update);
    app.delete( '/:hospital_id/:report_id/report',          disposal_report.destroy);
    app.get(    '/:hospital_id/report/sn/:disposal_sn',     disposal_report.retrieve_sn);
    app.put(    '/:hospital_id/report/sn/:disposal_sn',     disposal_report.update_sn);
    app.delete( '/:hospital_id/report/sn/:disposal_sn',     disposal_report.destroy_sn);
};