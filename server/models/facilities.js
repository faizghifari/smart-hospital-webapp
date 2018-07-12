module.exports = (sequelize, DataTypes) => {
  const facilities = sequelize.define('facilities', {
    facilities_name: DataTypes.STRING,
    facilities_desc: DataTypes.STRING,
    facilities_sn: DataTypes.STRING,
    facilities_qrcode: DataTypes.STRING,
    facilities_status: DataTypes.BOOLEAN,
    facilities_loc: DataTypes.STRING
  }, {});
  facilities.associate = (models) => {
    // associations can be defined here
  };
  return facilities;
};