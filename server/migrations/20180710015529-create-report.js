module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('reports', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            report_sn: {
                type: Sequelize.STRING
            },
            report_desc: {
                type: Sequelize.TEXT
            },
            report_details: {
                type: Sequelize.TEXT
            },
            report_status: {
                type: Sequelize.BOOLEAN
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
        return queryInterface.dropTable('reports');
    }
};