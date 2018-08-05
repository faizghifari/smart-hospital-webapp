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