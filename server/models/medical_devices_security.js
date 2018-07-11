module.exports = (sequelize, DataTypes) => {
  const medical_devices_security = sequelize.define('medical_devices_security', {
    device_id: DataTypes.INTEGER,
    current_loc: DataTypes.STRING,
    current_pic: DataTypes.STRING
  }, {});
  medical_devices_security.associate = (models) => {
    medical_devices_security.belongsTo(models.medical_devices);
  };
  return medical_devices_security;
};