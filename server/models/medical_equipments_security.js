module.exports = (sequelize, DataTypes) => {
  const medical_equipments_security = sequelize.define('medical_equipments_security', {
    is_room_locked: DataTypes.BOOLEAN
  }, {});
  medical_equipments_security.associate = (models) => {
    medical_equipments_security.belongsTo(models.rooms, {
      foreignKey: 'room_id'
    });

    medical_equipments_security.belongsTo(models.users, {
      foreignKey: 'pic_id'
    });

    medical_equipments_security.belongsTo(models.medical_equipments, {
      foreignKey: 'equipment_id'
    });
  };
  return medical_equipments_security;
};