module.exports = (sequelize, DataTypes) => {
  const buildings = sequelize.define('buildings', {
    building_name: DataTypes.STRING,
    building_pic: DataTypes.STRING,
    count_levels: DataTypes.INTEGER,
    count_rooms: DataTypes.INTEGER,
    current_safety: DataTypes.INTEGER,
    current_security: DataTypes.INTEGER,
    current_productivity: DataTypes.INTEGER,
    hospital_id: DataTypes.INTEGER
  }, {});
  buildings.associate = (models) => {
    buildings.belongsTo(models.hospitals);
  };
  return buildings;
};