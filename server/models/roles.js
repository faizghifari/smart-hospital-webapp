'use strict';
module.exports = (sequelize, DataTypes) => {
  var roles = sequelize.define('roles', {
    scope: DataTypes.STRING,
    state_id: DataTypes.INTEGER,
    hospital_id: DataTypes.INTEGER
  }, {});
  roles.associate = function(models) {
    roles.belongsTo(models.states);
    roles.belongsTo(models.hospitals);
  };
  return roles;
};