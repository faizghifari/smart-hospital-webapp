module.exports = (sequelize, DataTypes) => {
    const spare_part = sequelize.define('spare_part', {
        part_name: DataTypes.STRING,
        part_desc: DataTypes.STRING,
        part_sn: DataTypes.STRING,
        part_qrcode: DataTypes.STRING,
        part_qty: DataTypes.INTEGER
    }, {});
    spare_part.associate = (models) => {
        spare_part.belongsTo(models.hospitals, {
            foreignKey: 'hospital_id'
        });

        spare_part.belongsTo(models.spare_part_type, {
            foreignKey: 'part_type_id'
        });
    };
    return spare_part;
};