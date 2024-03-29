module.exports = (sequelize, DataTypes) => {
    const levels = sequelize.define('levels', {
        level_name: DataTypes.STRING,
        count_rooms: DataTypes.INTEGER,
        current_safety: DataTypes.INTEGER,
        current_security: DataTypes.INTEGER,
        current_productivity: DataTypes.INTEGER
    }, {});
    levels.associate = (models) => {
        levels.belongsTo(models.users, {
            foreignKey: 'pic_id'
        });

        levels.belongsTo(models.buildings, {
            foreignKey: 'building_id'
        });

        levels.belongsTo(models.hospitals, {
            foreignKey: 'hospital_id'
        });
        
        levels.hasMany(models.levels_history, {
            foreignKey: 'level_id'
        });

        levels.hasMany(models.rooms, {
            foreignKey: 'level_id'
        });
    };
    return levels;
};