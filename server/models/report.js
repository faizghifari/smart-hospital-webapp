module.exports = (sequelize, DataTypes) => {
    const report = sequelize.define('report', {
        report_sn: DataTypes.STRING,
        report_desc: DataTypes.TEXT,
        report_details: DataTypes.TEXT,
        is_open: DataTypes.BOOLEAN
    }, {});
    report.associate = (models) => {
        report.belongsTo(models.hospitals, {
            foreignKey: 'hospital_id'
        });

        report.belongsTo(models.medical_equipments, {
            foreignKey: 'equipment_id'
        });

        report.belongsTo(models.users, {
            foreignKey: 'user_id'
        });
        
        report.hasOne(models.maintenance_work_order, {
            foreignKey: 'report_id'
        });
    };
    return report;
};