module.exports = (sequelize, DataTypes) => {
  const medical_devices_type = sequelize.define('medical_devices_type', {
    type_name: DataTypes.STRING,
    type_desc: DataTypes.STRING
  }, {});
  medical_devices_type.associate = (models) => {
    // associations can be defined here
  };
  return medical_devices_type;
};