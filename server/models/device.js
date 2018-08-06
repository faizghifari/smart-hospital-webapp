module.exports = (sequelize, DataTypes) => {
    const device = sequelize.define('device', {
        device_sn: DataTypes.STRING,
        device_qrcode: DataTypes.STRING,
        device_sensors: DataTypes.ARRAY(DataTypes.JSON)
    }, {});
    device.associate = (models) => {
        device.hasOne(models.medical_equipments, {
            foreignKey: 'device_id'
        });
    };
    return device;
};