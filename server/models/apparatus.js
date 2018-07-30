module.exports = (sequelize, DataTypes) => {
    const apparatus = sequelize.define('apparatus', {
        apparatus_name: DataTypes.STRING,
        apparatus_desc: DataTypes.STRING,
        apparatus_sn: DataTypes.STRING,
        apparatus_qrcode: DataTypes.STRING,
        apparatus_calibration_due_on: DataTypes.DATEONLY
    }, {});
    apparatus.associate = (/*models*/) => {
    // associations can be defined here
    };
    return apparatus;
};