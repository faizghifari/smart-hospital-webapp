'use strict';
module.exports = (sequelize, DataTypes) => {
  var rooms_productivity = sequelize.define('rooms_productivity', {
    room_id: DataTypes.INTEGER,
    count_usage: DataTypes.INTEGER,
    standard_usage: DataTypes.INTEGER
  }, {});
  rooms_productivity.associate = function(models) {
    rooms_productivity.belongsTo(models.rooms);
  };
  return rooms_productivity;
};