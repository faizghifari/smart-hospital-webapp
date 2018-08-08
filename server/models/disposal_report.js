module.exports = (sequelize, DataTypes) => {
    const disposal_report = sequelize.define('disposal_report', {
        report_sn: DataTypes.STRING,
        report_desc: DataTypes.STRING,
        disposal_reason: DataTypes.STRING,
        disposal_tasks: DataTypes.ARRAY(DataTypes.JSON),
        is_open: DataTypes.BOOLEAN
    }, {});
    disposal_report.associate = (models) => {
        disposal_report.belongsTo(models.hospitals, {
            foreignKey: 'hospital_id'
        });
        
        disposal_report.belongsTo(models.medical_equipments, {
            foreignKey: 'equipment_id'
        });

        disposal_report.belongsTo(models.users, {
            foreignKey: 'user_id'
        });

        disposal_report.belongsTo(models.disposal_request, {
            foreignKey: 'request_id'
        });

        disposal_report.hasOne(models.disposal_equipment, {
            foreignKey: 'report_id'
        });
    };
    return disposal_report;
};