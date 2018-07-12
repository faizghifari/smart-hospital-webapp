module.exports = (sequelize, DataTypes) => {
  const medical_equipments_history = sequelize.define('medical_equipments_history', {
    date_time: DataTypes.DATE,
    record_safety: DataTypes.INTEGER,
    record_security: DataTypes.INTEGER,
    record_productivity: DataTypes.INTEGER
  }, {});
  medical_equipments_history.associate = (models) => {
    medical_equipments_history.belongsTo(models.medical_equipments, {foreignKey: 'equipments_id'});
  };
  return medical_equipments_history;
};