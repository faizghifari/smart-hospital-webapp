module.exports = (sequelize, DataTypes) => {
    const disposal_request = sequelize.define('disposal_request', {
        request_sn: DataTypes.STRING,
        request_desc: DataTypes.STRING,
        disposal_reason: DataTypes.STRING,
        is_approved: DataTypes.BOOLEAN
    }, {});
    disposal_request.associate = (models) => {
        disposal_request.belongsTo(models.hospitals, {
            foreignKey: 'hospital_id'
        });

        disposal_request.belongsTo(models.users, {
            foreignKey: 'user_id'
        });

        disposal_request.belongsTo(models.medical_equipments, {
            foreignKey: 'equipment_id'
        });

        disposal_request.belongsTo(models.maintenance_cm, {
            foreignKey: 'cm_id'
        });

        disposal_request.hasOne(models.disposal_report, {
            foreignKey: 'request_id'
        });        
    };
    return disposal_request;
};