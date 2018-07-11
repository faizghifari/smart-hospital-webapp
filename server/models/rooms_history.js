module.exports = (sequelize, DataTypes) => {
  const rooms_history = sequelize.define('rooms_history', {
    room_id: DataTypes.INTEGER,
    date_time: DataTypes.DATE,
    record_safety: DataTypes.INTEGER,
    record_security: DataTypes.INTEGER,
    record_productivity: DataTypes.INTEGER
  }, {});
  rooms_history.associate = (models) => {
    rooms_history.belongsTo(models.rooms);
  };
  return rooms_history;
};