module.exports = (sequelize, DataTypes) => {
  const hospitals_history = sequelize.define('hospitals_history', {
    hospital_id: DataTypes.INTEGER,
    date_time: DataTypes.DATE,
    record_safety: DataTypes.INTEGER,
    record_security: DataTypes.INTEGER,
    record_productivity: DataTypes.INTEGER
  }, {});
  hospitals_history.associate = (models) => {
    hospitals_history.belongsTo(models.hospitals);
  };
  return hospitals_history;
};