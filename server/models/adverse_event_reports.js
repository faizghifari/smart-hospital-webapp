'use strict';
module.exports = (sequelize, DataTypes) => {
    var adverse_event_reports = sequelize.define('adverse_event_reports', {
        report_sn: DataTypes.STRING,
        report_desc: DataTypes.STRING,
        report_details: DataTypes.STRING
    }, {});
    adverse_event_reports.associate = function(models) {
        adverse_event_reports.belongsTo(models.hospitals, {
            foreignKey: 'hospital_id'
        });

        adverse_event_reports.belongsTo(models.medical_equipments, {
            foreignKey: 'equipment_id'
        });

        adverse_event_reports.belongsTo(models.users, {
            foreignKey: 'user_id'
        });
    };
    return adverse_event_reports;
};