'use strict';
module.exports = (sequelize, DataTypes) => {
  var hospitals = sequelize.define('hospitals', {
    hospital_name: DataTypes.STRING,
    count_buildings: DataTypes.INTEGER,
    count_roomos: DataTypes.INTEGER,
    current_safety: DataTypes.INTEGER,
    current_security: DataTypes.INTEGER,
    current_productivity: DataTypes.INTEGER,
    state_id: DataTypes.INTEGER
  }, {});
  hospitals.associate = function(models) {
    hospitals.belongsTo(models.states);
  };
  return hospitals;
};