'use strict';
module.exports = (sequelize, DataTypes) => {
  var medical_devices_type = sequelize.define('medical_devices_type', {
    type_name: DataTypes.STRING,
    type_desc: DataTypes.STRING
  }, {});
  medical_devices_type.associate = function(models) {
    //taroh sini
  };
  return medical_devices_type;
};