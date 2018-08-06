module.exports = (sequelize, DataTypes) => {
    const hospitals = sequelize.define('hospitals', {
        hospital_name: DataTypes.STRING,
        count_buildings: DataTypes.INTEGER,
        count_rooms: DataTypes.INTEGER,
        current_safety: DataTypes.INTEGER,
        current_security: DataTypes.INTEGER,
        current_productivity: DataTypes.INTEGER
    }, {});
    hospitals.associate = (models) => {
        hospitals.belongsTo(models.states, {
            foreignKey: 'state_id'
        });

        hospitals.hasMany(models.maintenance_cm, {
            foreignKey: 'hospital_id'
        });

        hospitals.hasMany(models.maintenance_work_order, {
            foreignKey: 'hospital_id'
        });

        hospitals.hasMany(models.maintenance_ppm, {
            foreignKey: 'hospital_id'
        });

        hospitals.hasMany(models.report, {
            foreignKey: 'hospital_id'
        });

        hospitals.hasMany(models.medical_equipments, {
            foreignKey: 'hospital_id'
        });

        hospitals.hasMany(models.device, {
            foreignKey: 'hospital_id'
        });

        hospitals.hasMany(models.spare_part, {
            foreignKey: 'hospital_id'
        });

        hospitals.hasMany(models.apparatus, {
            foreignKey: 'hospital_id'
        });

        hospitals.hasMany(models.beds, {
            foreignKey: 'hospital_id'
        });

        hospitals.hasMany(models.department, {
            foreignKey: 'hospital_id'
        });

        hospitals.hasMany(models.division, {
            foreignKey: 'hospital_id'
        });
        
        hospitals.hasMany(models.hospitals_history, {
            foreignKey: 'hospital_id'
        });

        hospitals.hasMany(models.buildings, {
            foreignKey: 'hospital_id'
        });

        hospitals.hasMany(models.levels, {
            foreignKey: 'hospital_id'
        });

        hospitals.hasMany(models.rooms, {
            foreignKey: 'hospital_id'
        });

        hospitals.hasMany(models.users, {
            foreignKey: 'hospital_id'
        });
    };
    return hospitals;
};