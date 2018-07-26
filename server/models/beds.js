module.exports = (sequelize, DataTypes) => {
    const beds = sequelize.define('beds', {
        bed_name: DataTypes.STRING,
        bed_desc: DataTypes.STRING,
        bed_status: DataTypes.BOOLEAN,
        production_date: DataTypes.DATE,
        is_used: DataTypes.BOOLEAN,
        current_safety: DataTypes.INTEGER,
        current_security: DataTypes.INTEGER,
        current_productivity: DataTypes.INTEGER
    }, {});
    beds.associate = (models) => {
        beds.belongsTo(models.rooms, {
            foreignKey: 'room_id'
        });

        beds.belongsTo(models.users, {
            foreignKey: 'pic_id'
        });

        beds.hasOne(models.beds_security, {
            foreignKey: 'bed_id'
        });
    
        beds.hasOne(models.beds_productivity, {
            foreignKey: 'bed_id'
        });

        beds.hasOne(models.beds_safety, {
            foreignKey: 'bed_id'
        });

        beds.hasMany(models.beds_history, {
            foreignKey: 'bed_id'
        });
    };
    return beds;
};