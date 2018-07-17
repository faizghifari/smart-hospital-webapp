const equipment_type = require('./type_crud');
const manufacturer = require('./manufacturer_crud');
const equipment_type_basic = require('./type_basic_crud');
const equipment_type_medium = require('./type_medium_crud');
const equipment_type_high = require('./type_high_crud');

module.exports = (app) => {
    app.post('/api/admin/equipment_type', equipment_type.create);
    app.get('/api/admin/equipment_type', equipment_type.list);
    app.get('/api/admin/equipment_type/:type_id', equipment_type.retrieve);
    app.put('/api/admin/equipment_type/:type_id', equipment_type.update);
    app.delete('/api/admin/equipment_type/:type_id', equipment_type.destroy);

    app.post('/api/admin/manufacturer', manufacturer.create);
    app.get('/api/admin/manufacturer', manufacturer.list);
    app.get('/api/admin/manufacturer/:manufacturer_id', manufacturer.retrieve);
    app.put('/api/admin/manufacturer/:manufacturer_id', manufacturer.update);
    app.delete('/api/admin/manufacturer/:manufacturer_id', manufacturer.destroy);

    app.get('/api/admin/equipment_type/:type_id/basic', equipment_type_basic.list);
    app.get('/api/admin/equipment_type/:type_id/basic/details', equipment_type_basic.list_details);
    app.get('/api/admin/equipment_type/:type_id/basic/:basic_id', equipment_type_basic.retrieve_type);
    app.get('/api/admin/equipment_type/:type_id/basic/:basic_id/details', equipment_type_basic.retrieve_type_details);

    app.get('/api/admin/equipment_type/:type_id/medium', equipment_type_medium.list);
    app.get('/api/admin/equipment_type/:type_id/medium/details', equipment_type_medium.list_details);
    app.get('/api/admin/equipment_type/:type_id/medium/:medium_id', equipment_type_medium.retrieve_type);
    app.get('/api/admin/equipment_type/:type_id/medium/:medium_id/details', equipment_type_medium.retrieve_type_details);

    app.get('/api/admin/equipment_type/:type_id/high', equipment_type_high.list);
    app.get('/api/admin/equipment_type/:type_id/high/details', equipment_type_high.list_details);
    app.get('/api/admin/equipment_type/:type_id/high/:high_id', equipment_type_high.retrieve_type);
    app.get('/api/admin/equipment_type/:type_id/high/:high_id/details', equipment_type_high.retrieve_type_details);
};