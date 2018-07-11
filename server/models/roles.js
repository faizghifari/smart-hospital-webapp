module.exports = (sequelize, DataTypes) => {
  const roles = sequelize.define('roles', {
    scope: DataTypes.STRING
  }, {});
  roles.associate = (models) => {
    roles.belongsTo(models.states, {foreignKey: 'state_id'});
    roles.belongsTo(models.hospitals, {foreignKey: 'hospital_id'});
  };
  return roles;
};