'use strict';
module.exports = (sequelize, DataTypes) => {
  var states_history = sequelize.define('states_history', {
    state_id: DataTypes.INTEGER,
    date_time: DataTypes.DATE,
    record_safety: DataTypes.INTEGER,
    record_security: DataTypes.INTEGER,
    record_productivity: DataTypes.INTEGER
  }, {});
  states_history.associate = function(models) {
    states_history.belongsTo(models.states);
  };
  return states_history;
};