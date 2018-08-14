module.exports = (sequelize, DataTypes) => {
    var suppliers = sequelize.define('suppliers', {
        supplier_name: DataTypes.STRING,
        supplier_desc: DataTypes.STRING,
        supplier_sn: DataTypes.STRING
    }, {});
    suppliers.associate = (models) => {
        suppliers.hasMany(models.medical_equipments, {
            foreignKey: 'supplier_id'
        });
    };
    return suppliers;
};