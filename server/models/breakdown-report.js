module.exports = (sequelize, DataTypes) => {
    const breakdown_report = sequelize.define('breakdown_report', {
        report_sn: DataTypes.STRING,
        report_desc: DataTypes.TEXT,
        report_details: DataTypes.TEXT,
        is_open: DataTypes.BOOLEAN
    }, {});
    breakdown_report.associate = (models) => {
        breakdown_report.belongsTo(models.hospitals, {
            foreignKey: 'hospital_id'
        });

        breakdown_report.belongsTo(models.medical_equipments, {
            foreignKey: 'equipment_id'
        });

        breakdown_report.belongsTo(models.users, {
            foreignKey: 'user_id'
        });
        
        breakdown_report.hasOne(models.maintenance_work_order, {
            foreignKey: 'report_id'
        });
    };
    return breakdown_report;
};