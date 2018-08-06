module.exports = (sequelize, DataTypes) => {
    const spare_part_type = sequelize.define('spare_part_type', {
        type_name: DataTypes.STRING,
        type_desc: DataTypes.STRING
    }, {});
    spare_part_type.associate = (models) => {
        spare_part_type.hasMany(models.spare_part, {
            foreignKey: 'part_type_id'
        });
    };
    return spare_part_type;
};