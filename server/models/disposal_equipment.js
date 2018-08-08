module.exports = (sequelize, DataTypes) => {
    const disposal_equipment = sequelize.define('disposal_equipment', {
        equipment_details: DataTypes.ARRAY(DataTypes.JSON),
        disposal_reason: DataTypes.STRING
    }, {});
    disposal_equipment.associate = (models) => {
        disposal_equipment.belongsTo(models.hospitals, {
            foreignKey: 'hospital_id'
        });

        disposal_equipment.belongsTo(models.disposal_report, {
            foreignKey: 'report_id'
        });
    };
    return disposal_equipment;
};