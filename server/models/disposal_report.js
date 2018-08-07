module.exports = (sequelize, DataTypes) => {
    const disposal_report = sequelize.define('disposal_report', {
        dispose_sn: DataTypes.STRING,
        dispose_desc: DataTypes.STRING,
        dispose_reason: DataTypes.STRING
    }, {});
    disposal_report.associate = function(models) {
        disposal_report.belongsTo(models.hospitals, {
            foreignKey: 'hospital_id'
        });
        
        disposal_report.belongsTo(models.medical_equipments, {
            foreignKey: 'equipment_id'
        });

        disposal_report.belongsTo(models.users, {
            foreignKey: 'user_id'
        });

        disposal_report.belongsTo(models.maintenance_cm, {
            foreignKey: 'cm_id'
        });

        disposal_report.hasOne(models.disposal_equipment, {
            foreignKey: 'report_id'
        });
    };
    return disposal_report;
};