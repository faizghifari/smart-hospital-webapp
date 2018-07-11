'use strict';
module.exports = (sequelize, DataTypes) => {
  var medical_equipments_type_proc = sequelize.define('medical_equipments_type_proc', {
    proc_sequence_num: DataTypes.INTEGER,
    proc_type: DataTypes.STRING,
    proc_action: DataTypes.STRING
  }, {});
  medical_equipments_type_proc.associate = function(models) {
    // associations can be defined here
  };
  return medical_equipments_type_proc;
};