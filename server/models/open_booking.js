'use strict';
module.exports = (sequelize, DataTypes) => {
    var open_booking = sequelize.define('open_bookings', {
        start_time: DataTypes.DATE,
        end_time: DataTypes.DATE,
        purpose: DataTypes.TEXT
    }, {});
    open_booking.associate = function(models) {
        open_booking.belongsTo(models.users, {
            foreignKey: 'user_id'
        });

        open_booking.belongsTo(models.medical_equipments, {
            foreignKey: 'equipment_id'
        });

        open_booking.belongsTo(models.rooms, {
            foreignKey: 'room_id'
        });
    
        open_booking.belongsTo(models.hospitals, {
            foreignKey: 'hospital_id'
        });
    };
    return open_booking;
};