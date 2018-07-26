module.exports = (sequelize, DataTypes) => {
    const states = sequelize.define('states', {
        state_name: DataTypes.STRING,
        count_hospitals: DataTypes.INTEGER,
        current_safety: DataTypes.INTEGER,
        current_productivity: DataTypes.INTEGER
    }, {});
    states.associate = (models) => {
        states.hasMany(models.roles, {
            foreignKey: 'state_id'
        });

        states.hasMany(models.hospitals, {
            foreignKey: 'state_id'
        });

        states.hasMany(models.states_history, {
            foreignKey: 'state_id'
        });
    };
    return states;
};