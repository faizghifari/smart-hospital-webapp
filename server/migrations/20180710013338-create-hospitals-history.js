module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('hospitals_histories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            hospital_id: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                allowNull: false,
                references: {
                    model: 'hospitals',
                    key: 'id',
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            date_time: {
                type: Sequelize.DATE
            },
            record_safety: {
                type: Sequelize.INTEGER
            },
            record_security: {
                type: Sequelize.INTEGER
            },
            record_productivity: {
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
        queryInterface.dropTable('hospitals_histories');
    }
};