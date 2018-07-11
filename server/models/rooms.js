module.exports = (sequelize, DataTypes) => {
  const rooms = sequelize.define('rooms', {
    room_name: DataTypes.STRING,
    room_pic: DataTypes.STRING,
    current_safety: DataTypes.INTEGER,
    current_security: DataTypes.INTEGER,
    current_productivity: DataTypes.INTEGER
  }, {});
  rooms.associate = (models) => {
    rooms.hasMany(models.levels, {foreignKey: 'level_id'});
  };
  return rooms;
};