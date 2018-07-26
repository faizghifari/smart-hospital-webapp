module.exports = (sequelize, DataTypes) => {
    const medical_equipments_productivity = sequelize.define('medical_equipments_productivity', {
        count_usage: DataTypes.INTEGER,
        standard_usage: DataTypes.INTEGER
    }, {});
    medical_equipments_productivity.associate = (models) => {
        medical_equipments_productivity.belongsTo(models.medical_equipments, {
            foreignKey: 'equipment_id'
        });
    };
    return medical_equipments_productivity;
};