module.exports = (sequelize, DataTypes) => {
    var manufacturers = sequelize.define('manufacturers', {
        manufacturers_name: DataTypes.STRING,
        manufacturers_desc: DataTypes.STRING,
        manufacturers_sn: DataTypes.STRING
    }, {});
    manufacturers.associate = (models) => {
        manufacturers.hasMany(models.medical_equipments, {
            foreignKey: 'manufacturers_id'
        });
    };
    return manufacturers;
};