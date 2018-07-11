module.exports = (sequelize, DataTypes) => {
  const medical_devices_security = sequelize.define('medical_devices_security', {
    current_loc: DataTypes.STRING,
    current_pic: DataTypes.STRING
  }, {});
  medical_devices_security.associate = (models) => {
    medical_devices_security.belongsTo(models.medical_devices, {foreignKey: 'device_id'});
  };
  return medical_devices_security;
};