module.exports = (sequelize, DataTypes) => {
  const medical_equipments_security = sequelize.define('medical_equipments_security', {
    current_loc: DataTypes.STRING,
    current_pic: DataTypes.STRING
  }, {});
  medical_equipments_security.associate = (models) => {
    medical_equipments_security.belongsTo(models.medical_equipments, {
      foreignKey: 'equipment_id'
    });
  };
  return medical_equipments_security;
};