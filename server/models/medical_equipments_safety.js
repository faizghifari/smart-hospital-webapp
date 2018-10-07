module.exports = (sequelize, DataTypes) => {
    const medical_equipments_safety = sequelize.define('medical_equipments_safety', {
        equipments_age: DataTypes.INTEGER,
        last_maintenance_date: DataTypes.DATE,
        standard_maintenance: DataTypes.INTEGER,
        is_reported: DataTypes.BOOLEAN
    }, {});
    medical_equipments_safety.associate = (models) => {
        medical_equipments_safety.belongsTo(models.medical_equipments, {
            foreignKey: 'equipment_id'
        });
    };
    return medical_equipments_safety;
};