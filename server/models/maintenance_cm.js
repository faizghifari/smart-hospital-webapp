module.exports = (sequelize, DataTypes) => {
    const maintenance_cm = sequelize.define('maintenance_cm', {
        apparatus_id: DataTypes.ARRAY(DataTypes.INTEGER),
        spare_part_id: DataTypes.ARRAY(DataTypes.INTEGER),
        qualitative_tasks: DataTypes.ARRAY(DataTypes.JSON),
        quantitative_tasks: DataTypes.ARRAY(DataTypes.JSON),
        preventive_tasks: DataTypes.ARRAY(DataTypes.JSON),
        est_tasks: DataTypes.ARRAY(DataTypes.JSON),
        notes: DataTypes.TEXT,
        cm_status: DataTypes.BOOLEAN,
        cm_result: DataTypes.BOOLEAN,
        cm_next_date: DataTypes.DATEONLY
    }, {});
    maintenance_cm.associate = (models) => {
        maintenance_cm.belongsTo(models.users, {
            foreignKey: 'user_id'
        });

        maintenance_cm.belongsTo(models.medical_equipments, {
            foreignKey: 'equipment_id'
        });

        maintenance_cm.belongsTo(models.maintenance_work_order, {
            foreignKey: 'work_order_id'
        });
    };
    return maintenance_cm;
};