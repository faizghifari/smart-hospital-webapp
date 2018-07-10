'use strict';
module.exports = (sequelize, DataTypes) => {
  var levels = sequelize.define('levels', {
    level_name: DataTypes.STRING,
    level_pic: DataTypes.STRING,
    count_rooms: DataTypes.INTEGER,
    current_safety: DataTypes.INTEGER,
    current_security: DataTypes.INTEGER,
    current_productivity: DataTypes.INTEGER,
    building_id: DataTypes.INTEGER
  }, {});
  levels.associate = function(models) {
    levels.belongsTo(models.buildings);
  };
  return levels;
};