module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        fullname: DataTypes.STRING,
        username: DataTypes.STRING,
        staffId: DataTypes.STRING,
        email: DataTypes.STRING,
    }, {});
  
    users.associate = (models) => {
        users.belongsTo(models.department, {
            foreignKey: 'dep_id'
        });

        users.belongsTo(models.division, {
            foreignKey: 'div_id'
        });

        users.belongsTo(models.roles, {
            foreignKey: 'role_id'
        });

        users.belongsTo(models.hospitals, {
            foreignKey: 'hospital_id'
        });

        users.hasMany(models.medical_equipments_booking, {
            foreignKey: 'user_id'
        });

        users.hasMany(models.open_bookings, {
            foreignKey: 'user_id'
        });

        users.hasMany(models.disposal_request, {
            foreignKey: 'user_id'
        });

        users.hasMany(models.disposal_report, {
            foreignKey: 'user_id'
        });

        users.hasMany(models.breakdown_reports, {
            foreignKey: 'user_id'
        });

        users.hasMany(models.adverse_event_reports, {
            foreignKey: 'user_id'
        });

        users.hasMany(models.medical_equipments_security_history, {
            foreignKey: 'pic_id'
        });

        users.hasMany(models.buildings, {
            foreignKey: 'pic_id'
        });

        users.hasMany(models.levels, {
            foreignKey: 'pic_id'
        });

        users.hasMany(models.rooms, {
            foreignKey: 'pic_id'
        });

        users.hasMany(models.beds, {
            foreignKey: 'pic_id'
        });

        users.hasMany(models.beds_security, {
            foreignKey: 'pic_id'
        });

        users.hasMany(models.medical_equipments, {
            foreignKey: 'pic_id'
        });

        users.hasMany(models.medical_equipments, {
            foreignKey: 'pic_mt_id'
        });

        users.hasMany(models.medical_equipments, {
            foreignKey: 'pic_usage_id'
        });

        users.hasMany(models.medical_equipments_security, {
            foreignKey: 'pic_id'
        });

        users.hasMany(models.maintenance_ppm, {
            foreignKey: 'user_id'
        });
        
        users.hasMany(models.maintenance_cm, {
            foreignKey: 'user_id'
        });
    };
    return users;
};