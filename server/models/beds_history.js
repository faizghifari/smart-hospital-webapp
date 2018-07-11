module.exports = (sequelize, DataTypes) => {
  const beds_history = sequelize.define('beds_history', {
    bed_id: DataTypes.INTEGER,
    date_time: DataTypes.DATE,
    record_safety: DataTypes.INTEGER,
    record_security: DataTypes.INTEGER,
    record_productivity: DataTypes.INTEGER
  }, {});
  beds_history.associate = (models) => {
    beds_history.belongsTo(models.beds);
  };
  return beds_history;
};