module.exports = (sequelize, DataTypes) => {
  const medical_devices_history = sequelize.define('medical_devices_history', {
    date_time: DataTypes.DATE,
    record_safety: DataTypes.INTEGER,
    record_security: DataTypes.INTEGER,
    record_productivity: DataTypes.INTEGER
  }, {});
  medical_devices_history.associate = (models) => {
    medical_devices_history.belongsTo(models.medical_devices, {foreignKey: 'device_id'});
  };
  return medical_devices_history;
};