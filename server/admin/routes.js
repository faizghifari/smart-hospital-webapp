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
    app.post(   '/equipment_type',                          equipment_type.create);
    app.get(    '/equipment_type',                          equipment_type.list);
    app.get(    '/equipment_type/names',                    equipment_type.list_name);
    app.get(    '/:type_id/equipment_type',                 equipment_type.retrieve);
    app.get(    '/:type_id/equipment_type/mt_plan',         equipment_type.retrieve_mt_plan);
    app.get(    '/:type_id/equipment_type/disposal_plan',   equipment_type.retrieve_disposal_plan);
    app.put(    '/:type_id/equipment_type',                 equipment_type.update);
    app.delete( '/:type_id/equipment_type',                 equipment_type.destroy);

    app.post(   '/apparatus_type',                      apparatus_type.create);
    app.get(    '/apparatus_type',                      apparatus_type.list);
    app.get(    '/:apparatus_type_id/apparatus_type',   apparatus_type.retrieve_req);
    app.put(    '/:apparatus_type_id/apparatus_type',   apparatus_type.update);
    app.delete( '/:apparatus_type_id/apparatus_type',   apparatus_type.destroy);

    app.get(    '/apparatus',                                       apparatus.list);
    app.post(   '/:hospital_id/apparatus',                          apparatus.create);
    app.get(    '/:hospital_id/apparatus',                          apparatus.list_hospital);
    app.get(    '/:hospital_id/:apparatus_id/apparatus',            apparatus.retrieve);
    app.put(    '/:hospital_id/:apparatus_id/apparatus',            apparatus.update);
    app.delete( '/:hospital_id/:apparatus_id/apparatus',            apparatus.destroy);
    app.get(    '/:hospital_id/apparatus/sn/:apparatus_sn',         apparatus.retrieve_sn);
    app.put(    '/:hospital_id/apparatus/sn/:apparatus_sn',         apparatus.update_sn);

    app.post(   '/spare_part_type',                 spare_part_type.create);
    app.get(    '/spare_part_type',                 spare_part_type.list);
    app.get(    '/:part_type_id/spare_part_type',   spare_part_type.retrieve_req);
    app.put(    '/:part_type_id/spare_part_type',   spare_part_type.update);
    app.delete( '/:part_type_id/spare_part_type',   spare_part_type.destroy);

    app.get(    '/spare_part',                                  spare_part.list);
    app.post(   '/:hospital_id/spare_part',                     spare_part.create);
    app.get(    '/:hospital_id/spare_part',                     spare_part.list_hospital);
    app.get(    '/:hospital_id/:part_id/spare_part',            spare_part.retrieve);
    app.put(    '/:hospital_id/:part_id/spare_part',            spare_part.update);
    app.delete( '/:hospital_id/:part_id/spare_part',            spare_part.destroy);
    app.get(    '/:hospital_id/spare_part/sn/:part_sn',         spare_part.retrieve_sn);
    app.put(    '/:hospital_id/spare_part/sn/:part_sn',         spare_part.update_sn);

    app.post(   '/manufacturer',                    manufacturer.create);
    app.get(    '/manufacturer',                    manufacturer.list);
    app.get(    '/manufacturer/names',              manufacturer.list_name);
    app.get(    '/manufacturer/:manufacturer_id',   manufacturer.retrieve);
    app.put(    '/manufacturer/:manufacturer_id',   manufacturer.update);
    app.delete( '/manufacturer/:manufacturer_id',   manufacturer.destroy);

    app.post(   '/qty_task',                qty_task.create);
    app.get(    '/qty_task',                qty_task.list);
    app.get(    '/:qty_task_id/qty_task',   qty_task.retrieve);
    app.put(    '/:qty_task_id/qty_task',   qty_task.update);
    app.delete( '/:qty_task_id/qty_task',   qty_task.destroy);

    app.get(    '/device',                          device.list);
    app.get(    '/device/sn',                       device.list_sn);
    app.post(   '/:hospital_id/device',             device.create);
    app.get(    '/:hospital_id/device',             device.list_hospital);
    app.get(    '/:hospital_id/device/sn',          device.list_hospital_sn);
    app.get(    '/:hospital_id/device/:device_sn',  device.retrieve_sn);
    app.get(    '/:hospital_id/:device_id/device',  device.retrieve);
    app.put(    '/:hospital_id/:device_id/device',  device.update);
    app.delete( '/:hospital_id/:device_id/device',  device.destroy);

    app.get(    '/:hospital_id/room',               room.list_hospital);
    app.get(    '/:hospital_id/room/sn/:room_sn',   room.retrieve_sn);

    app.get(    '/:hospital_id/user/engineer',  user.list_engineer);
};