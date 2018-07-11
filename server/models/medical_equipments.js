module.exports = (sequelize, DataTypes) => {
  const medical_equipments = sequelize.define('medical_equipments', {
    equipments_name: DataTypes.STRING,
    equipments_desc: DataTypes.STRING,
    equipments_loc: DataTypes.STRING,
    equipments_pic: DataTypes.STRING,
    equipments_pic_mt: DataTypes.STRING,
    equipments_pic_usage: DataTypes.STRING,
    equipments_sn: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    equipments_qrcode: DataTypes.STRING,
    equipments_status: DataTypes.BOOLEAN,
    equipments_lifetime: DataTypes.INTEGER,
    equipments_value: DataTypes.INTEGER,
    production_date: DataTypes.DATE,
    is_on: DataTypes.BOOLEAN,
    current_safety: DataTypes.INTEGER,
    current_security: DataTypes.INTEGER,
    current_productivity: DataTypes.INTEGER
  }, {});
  medical_equipments.associate = (models) => {
    medical_equipments.belongsTo(models.medical_equipments_types, {foreignKey: 'equipments_type_id'});
  };
  return medical_equipments;
};