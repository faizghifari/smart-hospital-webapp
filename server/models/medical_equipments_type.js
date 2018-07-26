module.exports = (sequelize, DataTypes) => {
    const medical_equipments_type = sequelize.define('medical_equipments_type', {
        type_name: DataTypes.STRING,
        type_desc: DataTypes.STRING
    }, {});
    medical_equipments_type.associate = (models) => {
        medical_equipments_type.hasMany(models.medical_equipments, {
            foreignKey: 'equipments_type_id'
        });

        medical_equipments_type.hasOne(models.medical_equipments_type_basic, {
            foreignKey: 'equipments_type_id',
        });

        medical_equipments_type.hasOne(models.medical_equipments_type_medium, {
            foreignKey: 'equipments_type_id',
        });

        medical_equipments_type.hasOne(models.medical_equipments_type_high, {
            foreignKey: 'equipments_type_id',
        });
    };
    return medical_equipments_type;
};