module.exports = (sequelize, DataTypes) => {
    const maintenance_ppm = sequelize.define('maintenance_ppm', {
        apparatus_id: DataTypes.ARRAY(DataTypes.INTEGER),
        spare_part_id: DataTypes.ARRAY(DataTypes.INTEGER),
        qualitative_tasks: DataTypes.ARRAY(DataTypes.JSON),
        quantitative_tasks: DataTypes.ARRAY(DataTypes.JSON),
        preventive_tasks: DataTypes.ARRAY(DataTypes.JSON),
        est_tasks: DataTypes.ARRAY(DataTypes.JSON),
        notes: DataTypes.TEXT,
        is_open: DataTypes.BOOLEAN,
        ppm_sn: DataTypes.STRING,
        ppm_result: DataTypes.BOOLEAN,
        ppm_next_date: DataTypes.DATEONLY
    }, {});
    maintenance_ppm.associate = (models) => {
        maintenance_ppm.belongsTo(models.hospitals, {
            foreignKey: 'hospital_id'
        });

        maintenance_ppm.belongsTo(models.users, {
            foreignKey: 'user_id'
        });

        maintenance_ppm.belongsTo(models.medical_equipments, {
            foreignKey: 'equipment_id'
        });

        maintenance_ppm.hasOne(models.maintenance_work_order, {
            foreignKey: 'ppm_id'
        });
    };
    return maintenance_ppm;
};