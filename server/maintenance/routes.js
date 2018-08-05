const reporting = require('./reporting');
const corrective = require('./corrective');
const preventive = require('./preventive');
const work_order = require('./work_order');

module.exports = (app) => {
    app.post('/api/maintenance/report', reporting.create);
    app.get('/api/maintenance/report', reporting.list);
    app.get('/api/maintenance/report/open', reporting.list_open);
    app.get('/api/maintenance/report/closed', reporting.list_closed);
    app.get('/api/maintenance/:report_id/report', reporting.retrieve);
    app.put('/api/maintenance/:report_id/report', reporting.update);
    app.delete('/api/maintenance/:report_id/report', reporting.destroy);
    app.get('/api/maintenance/report/:report_sn', reporting.retrieve_sn);
    app.put('/api/maintenance/report/:report_sn', reporting.update_sn);
    app.delete('/api/maintenance/report/:report_sn', reporting.destroy_sn);

    app.post('/api/maintenance/preventive', preventive.create);
    app.get('/api/maintenance/preventive', preventive.list);
    app.get('/api/maintenance/preventive/open', preventive.list_open);
    app.get('/api/maintenance/preventive/closed', preventive.list_closed);
    app.get('/api/maintenance/:ppm_id/preventive', preventive.retrieve);
    app.put('/api/maintenance/:ppm_id/preventive', preventive.update);
    app.delete('/api/maintenance/:ppm_id/preventive', preventive.destroy);
    app.get('/api/maintenance/preventive/ppm_sn', preventive.retrieve_sn);
    app.put('/api/maintenance/preventive/ppm_sn', preventive.update_sn);
    app.delete('/api/maintenance/preventive/ppm_sn', preventive.destroy_sn);

    app.post('/api/maintenance/corrective', corrective.create);
    app.get('/api/maintenance/corrective', corrective.list);
    app.get('/api/maintenance/corrective/open', corrective.list_open);
    app.get('/api/maintenance/corrective/closed', corrective.list_closed);
    app.get('/api/maintenance/:cm_id/corrective', corrective.retrieve);
    app.put('/api/maintenance/:cm_id/corrective', corrective.update);
    app.delete('/api/maintenance/:cm_id/corrective', corrective.destroy);
    app.get('/api/maintennance/corrective/:cm_sn', corrective.retrieve_sn);
    app.put('/api/maintennance/corrective/:cm_sn', corrective.update_sn);
    app.delete('/api/maintennance/corrective/:cm_sn', corrective.destroy_sn);

    app.post('/api/maintenance/work_order', work_order.create);
    app.get('/api/maintenance/work_order', work_order.list);
    app.get('/api/maintenance/work_order/open', work_order.list_open);
    app.get('/api/maintenance/work_order/closed', work_order.list_closed);
    app.get('/api/maintenance/:wo_id/work_order', work_order.retrieve);
    app.put('/api/maintenance/:wo_id/work_order', work_order.update);
    app.delete('/api/maintenance/:wo_id/work_order', work_order.destroy);
    app.get('/api/maintenance/work_order/:wo_sn', work_order.retrieve_sn);
    app.put('/api/maintenance/work_order/:wo_sn', work_order.update_sn);
    app.delete('/api/maintenance/work_order/:wo_sn', work_order.destroy_sn);
};