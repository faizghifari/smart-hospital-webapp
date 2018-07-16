module.exports = (sequelize, DataTypes) => {
  const medical_equipments_type_proc = sequelize.define('medical_equipments_type_proc', {
    proc_sequence_num: DataTypes.INTEGER,
    proc_type: DataTypes.STRING,
    proc_action: DataTypes.STRING
  }, {});
  medical_equipments_type_proc.associate = (models) => {
    medical_equipments_type_proc.belongsTo(models.medical_equipments_type_basic, {
      foreignKey: 'equipments_type_basic_id',
    });

    medical_equipments_type_proc.belongsTo(models.medical_equipments_type_medium, {
      foreignKey: 'equipments_type_medium_id',
    });

    medical_equipments_type_proc.belongsTo(models.medical_equipments_type_high, {
      foreignKey: 'equipments_type_high_id',
    });
  };
  return medical_equipments_type_proc;
};