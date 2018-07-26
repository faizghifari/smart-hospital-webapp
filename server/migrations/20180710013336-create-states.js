module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('states', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            state_name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            count_hospitals: {
                type: Sequelize.INTEGER
            },
            current_safety: {
                type: Sequelize.INTEGER
            },
            current_productivity: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        }),
    down: (queryInterface) => {
        queryInterface.dropTable('states');
    }
};