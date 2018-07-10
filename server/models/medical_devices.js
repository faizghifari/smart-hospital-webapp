'use strict';
module.exports = (sequelize, DataTypes) => {
  var medical_devices = sequelize.define('medical_devices', {
    device_name: DataTypes.STRING,
    device_desc: DataTypes.STRING,
    device_loc: DataTypes.STRING,
    device_pic: DataTypes.STRING,
    device_status: DataTypes.BOOLEAN,
    production_date: DataTypes.DATE,
    is_on: DataTypes.BOOLEAN,
    current_safety: DataTypes.INTEGER,
    current_security: DataTypes.INTEGER,
    current_productivity: DataTypes.INTEGER,
    device_type_id: DataTypes.INTEGER
  }, {});
  medical_devices.associate = function(models) {
    medical_devices.belongsTo(models.medical_devices_types);
  };
  return medical_devices;
};