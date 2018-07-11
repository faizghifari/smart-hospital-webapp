module.exports = (sequelize, DataTypes) => {
  const beds_safety = sequelize.define('beds_safety', {
    bed_age: DataTypes.INTEGER,
    last_maintenance_date: DataTypes.DATE,
    standard_maintenance: DataTypes.INTEGER,
    is_reported: DataTypes.BOOLEAN
  }, {});
  beds_safety.associate = (models) => {
    beds_safety.belongsTo(models.beds, {foreignKey: 'bed_id'});
  };
  return beds_safety;
};