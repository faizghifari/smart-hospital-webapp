module.exports = (sequelize, DataTypes) => {
    const disposal_equipment = sequelize.define('disposal_equipment', {
        equipment_name: DataTypes.STRING,
        equipment_desc: DataTypes.STRING,
        equipment_sn: DataTypes.STRING,
        equipment_qrcode: DataTypes.STRING,
        equipment_details: DataTypes.ARRAY(DataTypes.JSON),
        dispose_reason: DataTypes.STRING
    }, {});
    disposal_equipment.associate = function(models) {
        disposal_equipment.belongsTo(models.hospitals, {
            foreignKey: 'hospital_id'
        });

        disposal_equipment.belongsTo(models.disposal_report, {
            foreignKey: 'report_id'
        });
    };
    return disposal_equipment;
};