'use strict';
module.exports = (sequelize, DataTypes) => {
  var beds_security = sequelize.define('beds_security', {
    bed_id: DataTypes.INTEGER,
    current_loc: DataTypes.STRING,
    current_pic: DataTypes.STRING
  }, {});
  beds_security.associate = function(models) {
    beds_security.belongsTo(models.beds);
  };
  return beds_security;
};