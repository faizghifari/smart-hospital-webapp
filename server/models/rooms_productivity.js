module.exports = (sequelize, DataTypes) => {
    const rooms_productivity = sequelize.define('rooms_productivity', {
        count_usage: DataTypes.INTEGER,
        standard_usage: DataTypes.INTEGER
    }, {});
    rooms_productivity.associate = (models) => {
        rooms_productivity.belongsTo(models.rooms, {
            foreignKey: 'room_id'
        });
    };
    return rooms_productivity;
};