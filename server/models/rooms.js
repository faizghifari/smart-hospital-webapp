module.exports = (sequelize, DataTypes) => {
  const rooms = sequelize.define('rooms', {
    room_name: DataTypes.STRING,
    room_pic: DataTypes.STRING,
    current_safety: DataTypes.INTEGER,
    current_security: DataTypes.INTEGER,
    current_productivity: DataTypes.INTEGER
  }, {});
  rooms.associate = (models) => {
    rooms.belongsTo(models.levels, {foreignKey: 'level_id'});
    rooms.hasMany(models.rooms_history, {foreignKey: 'room_id'});
    rooms.hasMany(models.rooms_productivity, {foreignKey: 'room_id'});
    rooms.hasMany(models.rooms_security, {foreignKey: 'room_id'});
    rooms.hasMany(models.rooms_safety, {foreignKey: 'room_id'});
  };
  return rooms;
};