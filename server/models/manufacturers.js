'use strict';
module.exports = (sequelize, DataTypes) => {
  var manufacturers = sequelize.define('manufacturers', {
    manufacturers_name: DataTypes.STRING,
    manufacturers_desc: DataTypes.STRING,
    manufacturers_sn: DataTypes.STRING
  }, {});
  manufacturers.associate = function(models) {
    manufacturers.belongsTo(models.medical_equipments, {
      foreignKey: 'equipments_id'
    });
  };
  return manufacturers;
};