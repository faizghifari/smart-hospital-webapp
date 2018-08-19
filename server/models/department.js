module.exports = (sequelize, DataTypes) => {
    const department = sequelize.define('department', {
        dep_name: DataTypes.STRING,
        dep_desc: DataTypes.STRING
    }, {});
    department.associate = function(models) {
        department.belongsTo(models.hospitals, {
            foreignKey: 'hospital_id'
        });

        department.hasMany(models.medical_equipments, {
            foreignKey: 'dep_id'
        });

        department.hasMany(models.users, {
            foreignKey: 'dep_id'
        });

        department.hasMany(models.division, {
            foreignKey: 'dep_id'
        });
    };
    return department;
};