module.exports = (sequelize, DataTypes) => {
    const medical_equipments_type_medium = sequelize.define('medical_equipments_type_medium', {
        type_time_params: DataTypes.INTEGER,
        type_hr_req: DataTypes.STRING
    }, {});
    medical_equipments_type_medium.associate = (models) => {
        medical_equipments_type_medium.belongsTo(models.medical_equipments_type, {
            foreignKey: 'equipments_type_id'
        });
        medical_equipments_type_medium.hasMany(models.facilities, {
            foreignKey: 'equipments_type_medium_id'
        });
        medical_equipments_type_medium.hasMany(models.medical_equipments_type_proc, {
            foreignKey: 'equipments_type_medium_id',
            as: 'procedures',
        });
    };
    return medical_equipments_type_medium;
};