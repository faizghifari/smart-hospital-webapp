const equipment_type = require('./type_crud');
const manufacturer = require('./manufacturer_crud');
const apparatus = require('./apparatus_crud');

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

    app.post('/api/admin/apparatus', apparatus.create);
    app.get('/api/admin/apparatus', apparatus.list);
    app.get('/api/admin/apparatus/:apparatus_id', apparatus.retrieve);
    app.put('/api/admin/apparatus/:apparatus_id', apparatus.update);
    app.delete('/api/admin/apparatus/:apparatus_id', apparatus.destroy);
};