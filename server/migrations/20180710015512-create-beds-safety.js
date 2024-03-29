module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('beds_safeties', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            bed_id: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                allowNull: false,
                references: {
                    model: 'beds',
                    key: 'id',
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            bed_age: {
                type: Sequelize.INTEGER
            },
            last_maintenance_date: {
                type: Sequelize.DATE
            },
            standard_maintenance: {
                type: Sequelize.INTEGER
            },
            is_reported: {
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
        queryInterface.dropTable('beds_safeties');
    }
};