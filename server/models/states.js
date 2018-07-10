'use strict';
module.exports = (sequelize, DataTypes) => {
  var states = sequelize.define('states', {
    state_name: DataTypes.STRING,
    count_hospitals: DataTypes.INTEGER,
    current_safety: DataTypes.INTEGER,
    current_productivity: DataTypes.INTEGER
  }, {});
  states.associate = function(models) {
    // associations can be defined here
  };
  return states;
};