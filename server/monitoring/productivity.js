const medical_equipments_model = require('../models').medical_equipments;
const medical_equipments_productivity_model = require('../models').medical_equipments_productivity;

const io = require('../../app').io;

const productivity_io = io.of('/equipment/productivity/');

productivity_io.on('connection', (client) => {
    console.log('Client Connected');

    client.on('disconnect', () => {
        console.log('Client Disconnected');
    });
});

module.exports = {
    send_productivity(equipment_id, productivity_level) {
        productivity_io.emit('productivity/' + equipment_id, productivity_level);
    },

    create(equipment_id, data) {
        medical_equipments_productivity_model
        .create({
            equipment_id: equipment_id,
            count_usage: data.count_usage || 0,
            standard_usage: data.standard_usage
        })
        .catch(error => console.log(error));
    },

    update(equipment_id, data) {
        medical_equipments_productivity_model
        .findOne({
            where: {
                equipment_id: equipment_id
            }
        })
        .then(equipment_productivity => {
            equipment_productivity
            .update({
                count_usage: data.count_usage,
                standard_usage: data.standard_usage
            })
            .catch((error) => console.log(error));
        })
        .catch(error => console.log(error));
    }
};