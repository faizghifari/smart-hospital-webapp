module.exports = (sequelize, DataTypes) => {
  const medical_equipments_type_high = sequelize.define('medical_equipments_type_high', {
    type_cost_params: DataTypes.INTEGER,
    type_time_params: DataTypes.INTEGER,
    type_hr_req: DataTypes.STRING
  }, {});
  medical_equipments_type_high.associate = (models) => {
    medical_equipments_type_high.belongsTo(models.medical_equipments_types, {
        foreignKey: 'equipments_type_id'
      });
    medical_equipments_type_high.hasMany(models.facilities, {
        foreignKey: 'equipments_type_high_id'
      });
    medical_equipments_type_high.hasMany(models.medical_equipments_type_procs, {
        foreignKey: 'equipments_type_high_id'
      });
  };
  return medical_equipments_type_high;
};