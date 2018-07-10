'use strict';
module.exports = (sequelize, DataTypes) => {
  var medical_devices_safety = sequelize.define('medical_devices_safety', {
    device_id: DataTypes.INTEGER,
    device_age: DataTypes.INTEGER,
    last_maintenance_date: DataTypes.DATE,
    standard_maintenance: DataTypes.INTEGER,
    is_reported: DataTypes.BOOLEAN
  }, {});
  medical_devices_safety.associate = function(models) {
    medical_devices_safety.belongsTo(models.medical_devices);
  };
  return medical_devices_safety;
};