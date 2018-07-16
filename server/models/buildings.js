module.exports = (sequelize, DataTypes) => {
  const buildings = sequelize.define('buildings', {
    building_name: DataTypes.STRING,
    building_pic: DataTypes.STRING,
    count_levels: DataTypes.INTEGER,
    count_rooms: DataTypes.INTEGER,
    current_safety: DataTypes.INTEGER,
    current_security: DataTypes.INTEGER,
    current_productivity: DataTypes.INTEGER
  }, {});
  buildings.associate = (models) => {
    buildings.belongsTo(models.hospitals, {
      foreignKey: 'hospital_id'
    });

    buildings.hasMany(models.buildings_history, {
      foreignKey: 'building_id'
    });

    buildings.hasMany(models.levels, {
      foreignKey: 'building_id'
    });
  };
  return buildings;
};