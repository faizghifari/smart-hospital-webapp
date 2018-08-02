module.exports = (sequelize, DataTypes) => {
    const report = sequelize.define('report', {
        report_sn: DataTypes.STRING,
        report_desc: DataTypes.TEXT,
        report_details: DataTypes.TEXT,
        report_status: DataTypes.BOOLEAN
    }, {});
    report.associate = (models) => {
        report.hasOne(models.maintenance_work_order, {
            foreignKey: 'report_id'
        });
    };
    return report;
};