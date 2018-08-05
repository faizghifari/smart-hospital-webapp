const equipment_type = require('./type_crud');
const manufacturer = require('./manufacturer_crud');
const apparatus_type = require('./apparatus_type_crud');
const apparatus = require('./apparatus_crud');
const spare_part_type = require('./spare_part_type_crud');
const spare_part = require('./spare_part_crud');
const user = require('./user_crud');
const device = require('./device_crud');
const qty_task = require('./qty_task_crud');
const room = require('./room_crud');

module.exports = (app) => {
    app.post('/api/admin/equipment_type', equipment_type.create);
    app.get('/api/admin/equipment_type', equipment_type.list);
    app.get('/api/admin/equipment_type/:type_id', equipment_type.retrieve);
    app.put('/api/admin/equipment_type/:type_id', equipment_type.update);
    app.delete('/api/admin/equipment_type/:type_id', equipment_type.destroy);

    app.post('/api/admin/apparatus_type', apparatus_type.create);
    app.get('/api/admin/apparatus_type', apparatus_type.list);
    app.get('/api/admin/:apparatus_type_id/apparatus_type', apparatus_type.retrieve_req);
    app.put('/api/admin/:apparatus_type_id/apparatus_type', apparatus_type.update);
    app.delete('/api/admin/:apparatus_type_id/apparatus_type', apparatus_type.destroy);

    app.post('/api/admin/apparatus', apparatus.create);
    app.get('/api/admin/apparatus', apparatus.list);
    app.get('/api/admin/apparatus/:apparatus_id', apparatus.retrieve);
    app.put('/api/admin/apparatus/:apparatus_id', apparatus.update);
    app.delete('/api/admin/apparatus/:apparatus_id', apparatus.destroy);

    app.post('/api/admin/spare_part_type', spare_part_type.create);
    app.get('/api/admin/spare_part_type', spare_part_type.list);
    app.get('/api/admin/:part_type_id/spare_part_type', spare_part_type.retrieve_req);
    app.put('/api/admin/:part_type_id/spare_part_type', spare_part_type.update);
    app.delete('/api/admin/:part_type_id/spare_part_type', spare_part_type.destroy);

    app.post('/api/admin/spare_part', spare_part.create);
    app.get('/api/admin/spare_part', spare_part.list);
    app.get('/api/admin/:part_id/spare_part', spare_part.retrieve);
    app.get('/api/admin/spare_part/sn/:part_sn', spare_part.retrieve_sn);
    app.get('/api/admin/spare_part/qrcode/:part_qrcode', spare_part.retrieve_qrcode);
    app.put('/api/admin/:part_id/spare_part', spare_part.update);
    app.put('/api/admin/spare_part/sn/:part_sn', spare_part.update_sn);
    app.put('/api/admin/spare_part/qrcode/:part_qrcode', spare_part.update_qrcode);
    app.delete('/api/admin/:part_id/spare_part', spare_part.destroy);

    app.post('/api/admin/manufacturer', manufacturer.create);
    app.get('/api/admin/manufacturer', manufacturer.list);
    app.get('/api/admin/manufacturer/:manufacturer_id', manufacturer.retrieve);
    app.put('/api/admin/manufacturer/:manufacturer_id', manufacturer.update);
    app.delete('/api/admin/manufacturer/:manufacturer_id', manufacturer.destroy);

    app.post('/api/admin/qty_task', qty_task.create);
    app.get('/api/admin/qty_task', qty_task.list);
    app.get('/api/admin/:qty_task_id/qty_task', qty_task.retrieve);
    app.put('/api/admin/:qty_task_id/qty_task', qty_task.update);
    app.delete('/api/admin/:qty_task_id/qty_task', qty_task.destroy);

    app.post('/api/admin/device', device.create);
    app.get('/api/admin/device', device.list);
    app.get('/api/admin/device/sn', device.list_sn);
    app.get('/api/admin/:device_id/device', device.retrieve);
    app.put('/api/admin/:device_id/device', device.update);
    app.delete('/api/admin/:device_id/device', device.destroy);
    app.get('/api/admin/device/:device_sn', device.retrieve_sn);

    app.get('/api/admin/:hospital_id/room', room.list_hospital);

    app.get('/api/admin/:hospital_id/user/engineer', user.list_engineer);
};