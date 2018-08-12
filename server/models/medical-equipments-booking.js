module.exports = (sequelize, DataTypes) => {
    const medical_equipments_booking = sequelize.define('medical_equipments_booking', {
        start_time: DataTypes.DATE,
        end_time: DataTypes.DATE,
        purpose: DataTypes.TEXT,
        is_used: DataTypes.BOOLEAN
    }, {});
    medical_equipments_booking.associate = function(models) {
        medical_equipments_booking.belongsTo(models.users, {
            foreignKey: 'user_id'
        });

        medical_equipments_booking.belongsTo(models.medical_equipments, {
            foreignKey: 'equipment_id'
        });

        medical_equipments_booking.belongsTo(models.rooms, {
            foreignKey: 'room_id'
        });
    };
    return medical_equipments_booking;
};