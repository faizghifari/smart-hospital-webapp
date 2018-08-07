module.exports = (sequelize, DataTypes) => {
    const rooms = sequelize.define('rooms', {
        room_name: DataTypes.STRING,
        latitude_low: DataTypes.FLOAT,
        latitude_high: DataTypes.FLOAT,
        longitude_low: DataTypes.FLOAT,
        longitude_high: DataTypes.FLOAT,
        current_safety: DataTypes.INTEGER,
        current_security: DataTypes.INTEGER,
        current_productivity: DataTypes.INTEGER
    }, {});
    rooms.associate = (models) => {
        rooms.belongsTo(models.users, {
            foreignKey: 'pic_id'
        });

        rooms.belongsTo(models.levels, {
            foreignKey: 'level_id'
        });

        rooms.belongsTo(models.hospitals, {
            foreignKey: 'hospital_id'
        });

        rooms.hasMany(models.medical_equipments_security_history, {
            foreignKey: 'room_id'
        });
        
        rooms.hasMany(models.beds, {
            foreignKey: 'room_id'
        });

        rooms.hasMany(models.beds_security, {
            foreignKey: 'room_id'
        });

        rooms.hasMany(models.rooms_history, {
            foreignKey: 'room_id'
        });

        rooms.hasOne(models.rooms_productivity, {
            foreignKey: 'room_id'
        });

        rooms.hasOne(models.rooms_security, {
            foreignKey: 'room_id'
        });

        rooms.hasOne(models.rooms_safety, {
            foreignKey: 'room_id'
        });

        rooms.hasMany(models.medical_equipments, {
            foreignKey: 'room_id',
        });

        rooms.hasMany(models.medical_equipments_security, {
            foreignKey: 'pic_id'
        });
    };
    return rooms;
};