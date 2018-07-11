module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password_hash: DataTypes.TEXT,
    is_ministry: DataTypes.BOOLEAN,
    is_admin: DataTypes.BOOLEAN
  }, {});
  
  users.associate = (models) => {
    users.hasMany(models.roles, {foreignKey: 'role_id'});
  };
  return users;
};