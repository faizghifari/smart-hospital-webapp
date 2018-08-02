module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('levels', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            level_name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            count_rooms: {
                type: Sequelize.INTEGER
            },
            current_safety: {
                type: Sequelize.INTEGER
            },
            current_security: {
                type: Sequelize.INTEGER
            },
            current_productivity: {
                type: Sequelize.INTEGER
            },
            pic_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'users',
                    key: 'id',
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            building_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'buildings',
                    key: 'id',
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            hospital_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'hospitals',
                    key: 'id',
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
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
        queryInterface.dropTable('levels');
    }
};