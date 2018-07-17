module.exports = (sequelize, DataTypes) => {
  const roles = sequelize.define('roles', {
    scope: DataTypes.STRING
  }, {});
  roles.associate = (models) => {
    roles.hasMany(models.users, {
      foreignKey: 'role_id'
    });
  };
  return roles;
};