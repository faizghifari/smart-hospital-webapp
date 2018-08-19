const reporting =   require(  './reporting');
const corrective =  require( './corrective');
const preventive =  require( './preventive');
const work_order =  require( './work_order');

module.exports = (app) => {
    app.get('/maintenance/report', reporting.list);
    app.get('/maintenance/report/open', reporting.list_open);
    app.get('/maintenance/report/closed', reporting.list_closed);

    app.get('/maintenance/ppm',         preventive.list);
    app.get('/maintenance/ppm/open',    preventive.list_open);
    app.get('/maintenance/ppm/closed',  preventive.list_closed);

    app.get('/maintenance/cm',          corrective.list);
    app.get('/maintenance/cm/open',     corrective.list_open);
    app.get('/maintenance/cm/closed',   corrective.list_closed);
    app.get('/maintenance/cm/ber',      corrective.list_ber);
    app.get('/maintenance/cm/not_ber',  corrective.list_not_ber);

    app.get('/maintenance/work_order',          work_order.list);
    app.get('/maintenance/work_order/open',     work_order.list_open);
    app.get('/maintenance/work_order/closed',   work_order.list_closed);
    
    app.post(   '/:hospital_id/maintenance/report', reporting.create);
    app.get(    '/:hospital_id/maintenance/report/open', reporting.list_hospital_open);
    app.get(    '/:hospital_id/maintenance/report/closed', reporting.list_hospital_closed);
    app.get(    '/:hospital_id/maintenance/report/:report_sn', reporting.retrieve_sn);
    app.put(    '/:hospital_id/maintenance/report/:report_sn', reporting.update_sn);
    app.delete( '/:hospital_id/maintenance/report/:report_sn', reporting.destroy_sn);
    app.get(    '/:hospital_id/maintenance/:report_id/report', reporting.retrieve);
    app.put(    '/:hospital_id/maintenance/:report_id/report', reporting.update);
    app.delete( '/:hospital_id/maintenance/:report_id/report', reporting.destroy);

    app.post(   '/:hospital_id/maintenance/ppm',            preventive.create);
    app.get(    '/:hospital_id/maintenance/ppm',            preventive.list_hospital);
    app.get(    '/:hospital_id/maintenance/ppm/open',       preventive.list_hospital_open);
    app.get(    '/:hospital_id/maintenance/ppm/closed',     preventive.list_hospital_closed);
    app.get(    '/:hospital_id/maintenance/ppm/:ppm_sn',    preventive.retrieve_sn);
    app.put(    '/:hospital_id/maintenance/ppm/:ppm_sn',    preventive.update_sn);
    app.delete( '/:hospital_id/maintenance/ppm/:ppm_sn',    preventive.destroy_sn);
    app.get(    '/:hospital_id/maintenance/:ppm_id/ppm',    preventive.retrieve);
    app.put(    '/:hospital_id/maintenance/:ppm_id/ppm',    preventive.update);
    app.delete( '/:hospital_id/maintenance/:ppm_id/ppm',    preventive.destroy);

    app.post(   '/:hospital_id/maintenance/cm',         corrective.create);
    app.get(    '/:hospital_id/maintenance/cm',         corrective.list_hospital);
    app.get(    '/:hospital_id/maintenance/cm/open',    corrective.list_hospital_open);
    app.get(    '/:hospital_id/maintenance/cm/closed',  corrective.list_hospital_closed);
    app.get(    '/:hospital_id/maintenance/cm/ber',     corrective.list_hospital_ber);
    app.get(    '/:hospital_id/maintenance/cm/not_ber', corrective.list_hospital_not_ber);
    app.get(    '/:hospital_id/maintennance/cm/:cm_sn', corrective.retrieve_sn);
    app.put(    '/:hospital_id/maintennance/cm/:cm_sn', corrective.update_sn);
    app.delete( '/:hospital_id/maintennance/cm/:cm_sn', corrective.destroy_sn);
    app.get(    '/:hospital_id/maintenance/:cm_id/cm',  corrective.retrieve);
    app.put(    '/:hospital_id/maintenance/:cm_id/cm',  corrective.update);
    app.delete( '/:hospital_id/maintenance/:cm_id/cm',  corrective.destroy);

    app.post(   '/:hospital_id/maintenance/work_order',         work_order.create);
    app.get(    '/:hospital_id/maintenance/work_order',         work_order.list_hospital);
    app.get(    '/:hospital_id/maintenance/work_order/open',    work_order.list_hospital_open);
    app.get(    '/:hospital_id/maintenance/work_order/closed',  work_order.list_hospital_closed);
    app.get(    '/:hospital_id/maintenance/work_order/:wo_sn',  work_order.retrieve_sn);
    app.put(    '/:hospital_id/maintenance/work_order/:wo_sn',  work_order.update_sn);
    app.delete( '/:hospital_id/maintenance/work_order/:wo_sn',  work_order.destroy_sn);
    app.get(    '/:hospital_id/maintenance/:wo_id/work_order',  work_order.retrieve);
    app.put(    '/:hospital_id/maintenance/:wo_id/work_order',  work_order.update);
    app.delete( '/:hospital_id/maintenance/:wo_id/work_order',  work_order.destroy);
};