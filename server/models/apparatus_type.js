module.exports = (sequelize, DataTypes) => {
    const apparatus_type = sequelize.define('apparatus_type', {
        type_name: DataTypes.STRING,
        type_desc: DataTypes.STRING
    }, {});
    apparatus_type.associate = (models) => {
        apparatus_type.hasMany(models.apparatus, {
            foreignKey: 'apparatus_type_id'
        });

        apparatus_type.hasMany(models.maintenance_qty_task, {
            foreignKey: 'apparatus_type_id'
        });
    };
    return apparatus_type;
};