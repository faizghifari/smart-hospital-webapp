'use strict';
module.exports = (sequelize, DataTypes) => {
  var medical_devices_history = sequelize.define('medical_devices_history', {
    device_id: DataTypes.INTEGER,
    date_time: DataTypes.DATE,
    record_safety: DataTypes.INTEGER,
    record_security: DataTypes.INTEGER,
    record_productivity: DataTypes.INTEGER
  }, {});
  medical_devices_history.associate = function(models) {
    medical_devices_history.belongsTo(models.medical_devices);
  };
  return medical_devices_history;
};