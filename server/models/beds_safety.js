'use strict';
module.exports = (sequelize, DataTypes) => {
  var beds_safety = sequelize.define('beds_safety', {
    bed_id: DataTypes.INTEGER,
    bed_age: DataTypes.INTEGER,
    last_maintenance_date: DataTypes.DATE,
    standard_maintenance: DataTypes.INTEGER,
    is_reported: DataTypes.BOOLEAN
  }, {});
  beds_safety.associate = function(models) {
    beds_safety.belongsTo(models.beds);
  };
  return beds_safety;
};