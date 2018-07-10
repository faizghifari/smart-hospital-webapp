'use strict';
module.exports = (sequelize, DataTypes) => {
  var rooms_safety = sequelize.define('rooms_safety', {
    room_id: DataTypes.INTEGER,
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
  rooms_safety.associate = function(models) {
    rooms_safety.belongsTo(models.rooms);
  };
  return rooms_safety;
};