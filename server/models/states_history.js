module.exports = (sequelize, DataTypes) => {
  const states_history = sequelize.define('states_history', {
    date_time: DataTypes.DATE,
    record_safety: DataTypes.INTEGER,
    record_security: DataTypes.INTEGER,
    record_productivity: DataTypes.INTEGER
  }, {});
  states_history.associate = (models) => {
    states_history.belongsTo(models.states, {
      foreignKey: 'state_id'
    });
  };
  return states_history;
};