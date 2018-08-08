module.exports = (sequelize, DataTypes) => {
    const medical_equipments_type = sequelize.define('medical_equipments_type', {
        type_name: DataTypes.STRING,
        type_desc: DataTypes.STRING,
        type_hr_req: DataTypes.STRING,
        type_time_params: DataTypes.INTEGER,
        type_level: DataTypes.INTEGER,
        apparatus_type_id: DataTypes.ARRAY(DataTypes.INTEGER),
        spare_part_type_id: DataTypes.ARRAY(DataTypes.INTEGER),
        qualitative_tasks: DataTypes.ARRAY(DataTypes.JSON),
        preventive_tasks: DataTypes.ARRAY(DataTypes.JSON),
        disposal_tasks: DataTypes.ARRAY(DataTypes.JSON)
    }, {});
    medical_equipments_type.associate = (models) => {
        medical_equipments_type.hasMany(models.medical_equipments, {
            foreignKey: 'equipments_type_id'
        });

        medical_equipments_type.hasMany(models.maintenance_qty_task, {
            foreignKey: 'equipments_type_id'
        });
    };
    return medical_equipments_type;
};