module.exports = (sequelize, DataTypes) => {
  var medical_equipments_type_medium = sequelize.define('medical_equipments_type_medium', {
    type_cost_params: DataTypes.INTEGER,
    type_time_params: DataTypes.INTEGER,
    type_hr_req: DataTypes.STRING
  }, {});
  medical_equipments_type_medium.associate = (models) => {
    medical_equipments_type_medium.belongsTo(models.medical_equipments_types, {
        foreignKey: 'equipments_type_id'
      });
    medical_equipments_type_medium.hasMany(models.facilities, {
        foreignKey: 'equipments_type_medium_id'
      });
    medical_equipments_type_medium.hasMany(models.medical_equipments_type_procs, {
        foreignKey: 'equipments_type_medium_id'
      });
  };
  return medical_equipments_type_medium;
};