'use strict';
module.exports = (sequelize, DataTypes) => {
  var buildings_history = sequelize.define('buildings_history', {
    building_id: DataTypes.INTEGER,
    date_time: DataTypes.DATE,
    record_safety: DataTypes.INTEGER,
    record_security: DataTypes.INTEGER,
    record_productivity: DataTypes.INTEGER
  }, {});
  buildings_history.associate = function(models) {
    buildings_history.belongsTo(models.buildings);
  };
  return buildings_history;
};