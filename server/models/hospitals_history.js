module.exports = (sequelize, DataTypes) => {
  const hospitals_history = sequelize.define('hospitals_history', {
    date_time: DataTypes.DATE,
    record_safety: DataTypes.INTEGER,
    record_security: DataTypes.INTEGER,
    record_productivity: DataTypes.INTEGER
  }, {});
  hospitals_history.associate = (models) => {
    hospitals_history.belongsTo(models.hospitals, {foreignKey: 'hospital_id'});
  };
  return hospitals_history;
};