module.exports = (sequelize, DataTypes) => {
  const medical_devices = sequelize.define('medical_devices', {
    device_name: DataTypes.STRING,
    device_desc: DataTypes.STRING,
    device_loc: DataTypes.STRING,
    device_pic: DataTypes.STRING,
    device_sn: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    devices_qrcode: DataTypes.STRING,
    device_status: DataTypes.BOOLEAN,
    production_date: DataTypes.DATE,
    is_on: DataTypes.BOOLEAN,
    current_safety: DataTypes.INTEGER,
    current_security: DataTypes.INTEGER,
    current_productivity: DataTypes.INTEGER
  }, {});
  medical_devices.associate = (models) => {
    medical_devices.belongsTo(models.medical_devices_types, {foreignKey: 'device_type_id'});
  };
  return medical_devices;
};