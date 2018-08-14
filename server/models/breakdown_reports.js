module.exports = (sequelize, DataTypes) => {
    const breakdown_reports = sequelize.define('breakdown_reports', {
        report_sn: DataTypes.STRING,
        report_desc: DataTypes.TEXT,
        report_details: DataTypes.TEXT,
        is_open: DataTypes.BOOLEAN
    }, {});
    breakdown_reports.associate = (models) => {
        breakdown_reports.belongsTo(models.hospitals, {
            foreignKey: 'hospital_id'
        });

        breakdown_reports.belongsTo(models.medical_equipments, {
            foreignKey: 'equipment_id'
        });

        breakdown_reports.belongsTo(models.users, {
            foreignKey: 'user_id'
        });
        
        breakdown_reports.hasOne(models.maintenance_work_order, {
            foreignKey: 'report_id'
        });
    };
    return breakdown_reports;
};