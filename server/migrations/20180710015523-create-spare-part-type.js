module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('spare_part_types', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            type_name: {
                type: Sequelize.STRING
            },
            type_desc: {
                type: Sequelize.STRING
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
        return queryInterface.dropTable('spare_part_types');
    }
};