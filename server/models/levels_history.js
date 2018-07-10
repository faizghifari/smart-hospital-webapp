'use strict';
module.exports = (sequelize, DataTypes) => {
  var levels_history = sequelize.define('levels_history', {
    level_id: DataTypes.INTEGER,
    date_time: DataTypes.DATE,
    record_safety: DataTypes.INTEGER,
    record_security: DataTypes.INTEGER,
    record_productivity: DataTypes.INTEGER
  }, {});
  levels_history.associate = function(models) {
    levels_history.belongsTo(models.levels);
  };
  return levels_history;
};