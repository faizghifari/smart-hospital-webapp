module.exports = (sequelize, DataTypes) => {
  const rooms_safety = sequelize.define('rooms_safety', {
    current_temperature: DataTypes.INTEGER,
    current_humidity: DataTypes.INTEGER,
    current_smoke: DataTypes.INTEGER,
    current_co: DataTypes.INTEGER,
    current_methane: DataTypes.INTEGER,
    current_lpg: DataTypes.INTEGER,
    current_light: DataTypes.INTEGER,
    current_led: DataTypes.INTEGER,
    current_freq: DataTypes.INTEGER
  }, {});
  rooms_safety.associate = (models) => {
    rooms_safety.belongsTo(models.rooms, {
      foreignKey: 'room_id'
    });
  };
  return rooms_safety;
};