module.exports = (sequelize, DataTypes) => {
  const rooms = sequelize.define('rooms', {
    room_name: DataTypes.STRING,
    room_pic: DataTypes.STRING,
    current_safety: DataTypes.INTEGER,
    current_security: DataTypes.INTEGER,
    current_productivity: DataTypes.INTEGER,
    level_id: DataTypes.INTEGER
  }, {});
  rooms.associate = (models) => {
    rooms.belongsTo(models.levels);
  };
  return rooms;
};