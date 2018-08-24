module.exports = (sequelize, DataTypes) => {
    const division = sequelize.define('division', {
        div_name: DataTypes.STRING,
        div_desc: DataTypes.STRING
    }, {});
    division.associate = function(models) {
        division.belongsTo(models.hospitals, {
            foreignKey: 'hospital_id'
        });

        division.belongsTo(models.department, {
            foreignKey: 'dep_id'
        });

        division.hasMany(models.medical_equipments, {
            foreignKey: 'div_id'
        });

        division.hasMany(models.users, {
            foreignKey: 'div_id'
        });
    };
    return division;
};