module.exports = (sequelize, DataTypes) => {
    const maintenance_qty_task = sequelize.define('maintenance_qty_task', {
        quantitave_tasks: DataTypes.ARRAY(DataTypes.JSON)
    }, {});
    maintenance_qty_task.associate = (models) => {
        maintenance_qty_task.belongsTo(models.apparatus_type, {
            foreignKey: 'apparatus_type_id'
        });

        maintenance_qty_task.belongsTo(models.medical_equipments_type, {
            foreignKey: 'equipments_type_id',
        });
    };
    return maintenance_qty_task;
};