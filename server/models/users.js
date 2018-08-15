module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    staffId: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    login_pin: DataTypes.STRING
  }, {});
  
  users.associate = (models) => {
    users.belongsTo(models.roles, {
      foreignKey: 'role_id'
    });

    users.belongsTo(models.hospitals, {
      foreignKey: 'hospital_id'
    });

    users.hasMany(models.buildings, {
      foreignKey: 'pic_id'
    });

    users.hasMany(models.levels, {
      foreignKey: 'pic_id'
    });

    users.hasMany(models.rooms, {
      foreignKey: 'pic_id'
    });

    users.hasMany(models.beds, {
      foreignKey: 'pic_id'
    });

    users.hasMany(models.beds_security, {
      foreignKey: 'pic_id'
    });

    users.hasMany(models.medical_equipments, {
      foreignKey: 'pic_id'
    });

    users.hasMany(models.medical_equipments, {
      foreignKey: 'pic_mt_id'
    });

    users.hasMany(models.medical_equipments, {
      foreignKey: 'pic_usage_id'
    });

    users.hasMany(models.medical_equipments_security, {
      foreignKey: 'pic_id'
    });
  };
  return users;
};