module.exports = (sequelize, DataTypes) => {
    const maintenance_work_order = sequelize.define('maintenance_work_order', {
        wo_desc: DataTypes.TEXT,
        wo_designation: DataTypes.TEXT,
        wo_req_details: DataTypes.TEXT
    }, {});
    maintenance_work_order.associate = (models) => {
        maintenance_work_order.belongsTo(models.maintenance_ppm, {
            foreignKey: 'ppm_id'
        });

        maintenance_work_order.hasOne(models.maintenance_cm, {
            foreignKey: 'work_order_id'
        });
    };
    return maintenance_work_order;
};