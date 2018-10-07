module.exports = (sequelize, DataTypes) => {
    const medical_equipments = sequelize.define('medical_equipments', {
        equipments_name: DataTypes.STRING,
        equipments_model: DataTypes.STRING,
        equipments_desc: DataTypes.STRING,
        equipments_sn: DataTypes.STRING,
        equipments_life_expectancy: DataTypes.INTEGER,
        equipments_value: DataTypes.INTEGER,
        equipments_value_currency: DataTypes.STRING,
        manufacturing_date: DataTypes.DATE,
        warranty_start_date: DataTypes.DATEONLY,
        warranty_completion_date: DataTypes.DATEONLY,
        is_on: DataTypes.BOOLEAN,
        is_available: DataTypes.BOOLEAN,
        current_safety: DataTypes.INTEGER,
        current_security: DataTypes.INTEGER,
        current_productivity: DataTypes.INTEGER,
        main_photos: DataTypes.STRING,
        additional_photos: DataTypes.ARRAY(DataTypes.STRING),
        documents: DataTypes.ARRAY(DataTypes.STRING)
    }, {});
    medical_equipments.associate = (models) => {
        medical_equipments.belongsTo(models.hospitals, {
            foreignKey: 'hospital_id'
        });

        medical_equipments.belongsTo(models.department, {
            foreignKey: 'dep_id'
        });

        medical_equipments.belongsTo(models.division, {
            foreignKey: 'div_id'
        });

        medical_equipments.belongsTo(models.manufacturers, {
            foreignKey: 'manufacturers_id',
        });

        medical_equipments.belongsTo(models.suppliers, {
            foreignKey: 'supplier_id',
        });

        medical_equipments.belongsTo(models.medical_equipments_type, {
            foreignKey: 'equipments_type_id',
        });

        medical_equipments.belongsTo(models.rooms, {
            foreignKey: 'room_id',
        });

        medical_equipments.belongsTo(models.users, {
            foreignKey: 'pic_id',
        });

        medical_equipments.belongsTo(models.users, {
            foreignKey: 'pic_mt_id',
        });

        medical_equipments.belongsTo(models.users, {
            foreignKey: 'pic_usage_id',
        });

        medical_equipments.belongsTo(models.device, {
            foreignKey: 'device_id'
        });

        medical_equipments.hasMany(models.medical_equipments_booking, {
            foreignKey: 'equipment_id'
        });

        medical_equipments.hasMany(models.open_bookings, {
            foreignKey: 'equipment_id'
        });

        medical_equipments.hasMany(models.medical_equipments_security_history, {
            foreignKey: 'equipment_id'
        });

        medical_equipments.hasMany(models.disposal_request, {
            foreignKey: 'equipment_id'
        });

        medical_equipments.hasMany(models.disposal_report, {
            foreignKey: 'equipment_id'
        });

        medical_equipments.hasMany(models.breakdown_reports, {
            foreignKey: 'equipment_id'
        });

        medical_equipments.hasMany(models.adverse_event_reports, {
            foreignKey: 'equipment_id'
        });

        medical_equipments.hasMany(models.medical_equipments_history, {
            foreignKey: 'equipment_id',
        });

        medical_equipments.hasOne(models.medical_equipments_productivity, {
            foreignKey: 'equipment_id',
        });

        medical_equipments.hasOne(models.medical_equipments_safety, {
            foreignKey: 'equipment_id',
        });

        medical_equipments.hasOne(models.medical_equipments_security, {
            foreignKey: 'equipment_id',
        });

        medical_equipments.hasMany(models.maintenance_ppm, {
            foreignKey: 'equipment_id'
        });

        medical_equipments.hasMany(models.maintenance_cm, {
            foreignKey: 'equipment_id'
        });
    };
    return medical_equipments;
};