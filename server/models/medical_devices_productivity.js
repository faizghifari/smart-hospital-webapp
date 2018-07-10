'use strict';
module.exports = (sequelize, DataTypes) => {
  var medical_devices_productivity = sequelize.define('medical_devices_productivity', {
    device_id: DataTypes.INTEGER,
    count_usage: DataTypes.INTEGER,
    standard_usage: DataTypes.INTEGER
  }, {});
  medical_devices_productivity.associate = function(models) {
    medical_devices_productivity.belongsTo(models.medical_devices);
  };
  return medical_devices_productivity;
};