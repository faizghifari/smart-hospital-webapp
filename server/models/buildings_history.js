module.exports = (sequelize, DataTypes) => {
    const buildings_history = sequelize.define('buildings_history', {
        date_time: DataTypes.DATE,
        record_safety: DataTypes.INTEGER,
        record_security: DataTypes.INTEGER,
        record_productivity: DataTypes.INTEGER
    }, {});
    buildings_history.associate = (models) => {
        buildings_history.belongsTo(models.buildings, {
            foreignKey: 'building_id'
        });
    };
    return buildings_history;
};