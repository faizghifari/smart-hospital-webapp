module.exports = (sequelize, DataTypes) => {
    const medical_equipments_security_history = sequelize.define('medical_equipments_security_history', {
        security_desc: DataTypes.STRING
    }, {});
    medical_equipments_security_history.associate = function(models) {
        medical_equipments_security_history.belongsTo(models.users, {
            foreignKey: 'pic_id'
        });

        medical_equipments_security_history.belongsTo(models.rooms, {
            foreignKey: 'room_id'
        });

        medical_equipments_security_history.belongsTo(models.medical_equipments, {
            foreignKey: 'equipment_id'
        });
        
        medical_equipments_security_history.belongsTo(models.medical_equipments_security, {
            foreignKey: 'security_id'
        });
    };
    return medical_equipments_security_history;
};