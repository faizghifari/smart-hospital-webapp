module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password_hash: DataTypes.TEXT,
    is_ministry: DataTypes.BOOLEAN,
    is_admin: DataTypes.BOOLEAN
  }, {});
  
  users.associate = (models) => {
    users.belongsTo(models.roles, {
      foreignKey: 'role_id',
    });

    users.belongsTo(models.hospitals, {
      foreignKey: 'hospital_id',
    });

    users.hasMany(model.medical_equipments, {
      foreignKey: 'pic_id',
    });

    users.hasMany(models.medical_equipments, {
      foreignKey: 'pic_mt_id',
    });

    users.hasMany(models.medical_equipments, {
      foreignKey: 'pic_usage_id',
    })
  };
  return users;
};