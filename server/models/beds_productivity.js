module.exports = (sequelize, DataTypes) => {
  const beds_productivity = sequelize.define('beds_productivity', {
    count_usage: DataTypes.INTEGER,
    standard_usage: DataTypes.INTEGER,
    turnover_usage: DataTypes.INTEGER
  }, {});
  beds_productivity.associate = (models) => {
    beds_productivity.belongsTo(models.beds, {foreignKey: 'bed_id'});
  };
  return beds_productivity;
};