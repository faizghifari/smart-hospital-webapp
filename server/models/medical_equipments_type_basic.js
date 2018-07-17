module.exports = (sequelize, DataTypes) => {
  const medical_equipments_type_basic = sequelize.define('medical_equipments_type_basic', {
    type_time_params: DataTypes.INTEGER,
    type_hr_req: DataTypes.STRING
  }, {});
  medical_equipments_type_basic.associate = (models) => {
    medical_equipments_type_basic.belongsTo(models.medical_equipments_type, {
        foreignKey: 'equipments_type_id'
      });
    medical_equipments_type_basic.hasMany(models.facilities,{
        foreignKey: 'equipments_type_basic_id'
      });
    medical_equipments_type_basic.hasMany(models.medical_equipments_type_proc,{
        foreignKey: 'equipments_type_basic_id',
        as: 'procedures',
      });
  };
  return medical_equipments_type_basic;
};