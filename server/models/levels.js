module.exports = (sequelize, DataTypes) => {
  const levels = sequelize.define('levels', {
    level_name: DataTypes.STRING,
    level_pic: DataTypes.STRING,
    count_rooms: DataTypes.INTEGER,
    current_safety: DataTypes.INTEGER,
    current_security: DataTypes.INTEGER,
    current_productivity: DataTypes.INTEGER,
    building_id: DataTypes.INTEGER
  }, {});
  levels.associate = (models) => {
    levels.belongsTo(models.buildings);
  };
  return levels;
};