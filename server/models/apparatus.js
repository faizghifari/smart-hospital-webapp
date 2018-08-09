module.exports = (sequelize, DataTypes) => {
    const apparatus = sequelize.define('apparatus', {
        apparatus_name: DataTypes.STRING,
        apparatus_desc: DataTypes.STRING,
        apparatus_sn: DataTypes.STRING,
        apparatus_calibration_due_on: DataTypes.DATEONLY
    }, {});
    apparatus.associate = (models) => {
        apparatus.belongsTo(models.hospitals, {
            foreignKey: 'hospital_id'
        });

        apparatus.belongsTo(models.apparatus_type, {
            foreignKey: 'apparatus_type_id'
        });
    };
    return apparatus;
};