module.exports = (sequelize, DataTypes) => {
  const medical_devices_safety = sequelize.define('medical_devices_safety', {
    device_age: DataTypes.INTEGER,
    last_maintenance_date: DataTypes.DATE,
    standard_maintenance: DataTypes.INTEGER,
    is_reported: DataTypes.BOOLEAN
  }, {});
  medical_devices_safety.associate = (models) => {
    medical_devices_safety.belongsTo(models.medical_devices, {foreignKey: 'device_id'});
  };
  return medical_devices_safety;
};