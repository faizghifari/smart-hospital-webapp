module.exports = (sequelize, DataTypes) => {
  const medical_equipments = sequelize.define('medical_equipments', {
    equipments_name: DataTypes.STRING,
    equipments_desc: DataTypes.STRING,
    equipments_sn: DataTypes.STRING,
    equipments_qrcode: DataTypes.STRING,
    equipments_status: DataTypes.BOOLEAN,
    equipments_lifetime: DataTypes.INTEGER,
    equipments_value: DataTypes.INTEGER,
    production_date: DataTypes.DATE,
    is_active: DataTypes.BOOLEAN,
    is_on: DataTypes.BOOLEAN,
    maintenance_options: DataTypes.INTEGER,
    current_safety: DataTypes.INTEGER,
    current_security: DataTypes.INTEGER,
    current_productivity: DataTypes.INTEGER
  }, {});
  medical_equipments.associate = (models) => {
    medical_equipments.belongsTo(models.manufacturers, {
      foreignKey: 'manufacturers_id',
    });

    medical_equipments.belongsTo(models.medical_equipments_type, {
      foreignKey: 'equipments_type_id',
    });

    medical_equipments.belongsTo(models.rooms, {
      foreignKey: 'room_id',
    });

    medical_equipments.belongsTo(models.users, {
      foreignKey: 'pic_id',
    });

    medical_equipments.belongsTo(models.users, {
      foreignKey: 'pic_mt_id',
    });

    medical_equipments.belongsTo(models.users, {
      foreignKey: 'pic_usage_id',
    });

    medical_equipments.hasMany(models.medical_equipments_history, {
      foreignKey: 'equipment_id',
    });

    medical_equipments.hasOne(models.medical_equipments_productivity, {
      foreignKey: 'equipment_id',
    });

    medical_equipments.hasOne(models.medical_equipments_safety, {
      foreignKey: 'equipment_id',
    });

    medical_equipments.hasOne(models.medical_equipments_security, {
      foreignKey: 'equipment_id',
    });
  };
  return medical_equipments;
};