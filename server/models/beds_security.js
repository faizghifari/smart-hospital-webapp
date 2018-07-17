module.exports = (sequelize, DataTypes) => {
  const beds_security = sequelize.define('beds_security', {
    current_loc: DataTypes.STRING,
    current_pic: DataTypes.STRING
  }, {});
  beds_security.associate = (models) => {
    beds_security.belongsTo(models.beds, {
      foreignKey: 'bed_id'
    });
  };
  return beds_security;
};