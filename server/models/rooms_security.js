'use strict';
module.exports = (sequelize, DataTypes) => {
  var rooms_security = sequelize.define('rooms_security', {
    room_id: DataTypes.INTEGER,
    is_unauthorized: DataTypes.BOOLEAN,
    is_locked: DataTypes.BOOLEAN,
    is_pic_exist: DataTypes.BOOLEAN
  }, {});
  rooms_security.associate = function(models) {
    rooms_security.belongsTo(models.rooms);
  };
  return rooms_security;
};