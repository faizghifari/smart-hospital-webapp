module.exports = (sequelize, DataTypes) => {
  const facilities = sequelize.define('facilities', {
    facilities_name: DataTypes.STRING,
    facilities_desc: DataTypes.STRING,
    facilities_sn: DataTypes.STRING,
    facilities_qrcode: DataTypes.STRING,
    facilities_status: DataTypes.BOOLEAN,
    facilities_loc: DataTypes.STRING
  }, {});
  facilities.associate = (models) => {
    facilities.belongsTo(models.medical_equipments_type_basic, {
      foreignKey: 'equipments_type_basic_id',
    });

    facilities.belongsTo(models.medical_equipments_type_medium, {
      foreignKey: 'equipments_type_medium_id',
    });

    facilities.belongsTo(models.medical_equipments_type_high, {
      foreignKey: 'equipments_type_high_id',
    });
  };
  return facilities;
};