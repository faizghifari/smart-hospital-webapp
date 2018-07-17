module.exports = (sequelize, DataTypes) => {
  const beds_security = sequelize.define('beds_security', {
    is_room_locked: DataTypes.BOOLEAN
  }, {});
  beds_security.associate = (models) => {
    beds_security.belongsTo(models.rooms, {
      foreignKey: 'room_id'
    });

    beds_security.belongsTo(models.users, {
      foreignKey: 'pic_id'
    })

    beds_security.belongsTo(models.beds, {
      foreignKey: 'bed_id'
    });
  };
  return beds_security;
};