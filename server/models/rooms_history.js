module.exports = (sequelize, DataTypes) => {
  const rooms_history = sequelize.define('rooms_history', {
    date_time: DataTypes.DATE,
    record_safety: DataTypes.INTEGER,
    record_security: DataTypes.INTEGER,
    record_productivity: DataTypes.INTEGER
  }, {});
  rooms_history.associate = (models) => {
    // rooms_history.hasMany(models.rooms, {foreignKey: 'room_id'});
  };
  return rooms_history;
};