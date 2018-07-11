module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password_hash: DataTypes.TEXT,
    is_ministry: DataTypes.BOOLEAN,
    is_admin: DataTypes.BOOLEAN,
    role_id: DataTypes.INTEGER
  }, {});
  
  users.associate = (models) => {
    users.belongsTo(models.roles);
  };
  return users;
};