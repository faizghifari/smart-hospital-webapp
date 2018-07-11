module.exports = (sequelize, DataTypes) => {
  const hospitals = sequelize.define('hospitals', {
    hospital_name: DataTypes.STRING,
    count_buildings: DataTypes.INTEGER,
    count_roomos: DataTypes.INTEGER,
    current_safety: DataTypes.INTEGER,
    current_security: DataTypes.INTEGER,
    current_productivity: DataTypes.INTEGER
  }, {});
  hospitals.associate = (models) => {
    hospitals.hasMany(models.states, {foreignKey: 'state_id'});
  };
  return hospitals;
};