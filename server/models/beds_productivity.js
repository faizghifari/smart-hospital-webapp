'use strict';
module.exports = (sequelize, DataTypes) => {
  var beds_productivity = sequelize.define('beds_productivity', {
    bed_id: DataTypes.INTEGER,
    count_usage: DataTypes.INTEGER,
    standard_usage: DataTypes.INTEGER,
    turnover_usage: DataTypes.INTEGER
  }, {});
  beds_productivity.associate = function(models) {
    beds_productivity.belongsTo(models.beds);
  };
  return beds_productivity;
};