module.exports = (sequelize, DataTypes) => {
  const medical_devices_productivity = sequelize.define('medical_devices_productivity', {
    count_usage: DataTypes.INTEGER,
    standard_usage: DataTypes.INTEGER
  }, {});
  medical_devices_productivity.associate = (models) => {
    medical_devices_productivity.belongsTo(models.medical_devices, {foreignKey: 'device_id'});
  };
  return medical_devices_productivity;
};