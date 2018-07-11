module.exports = (sequelize, DataTypes) => {
  const levels_history = sequelize.define('levels_history', {
    level_id: DataTypes.INTEGER,
    date_time: DataTypes.DATE,
    record_safety: DataTypes.INTEGER,
    record_security: DataTypes.INTEGER,
    record_productivity: DataTypes.INTEGER
  }, {});
  levels_history.associate = (models) => {
    levels_history.belongsTo(models.levels);
  };
  return levels_history;
};