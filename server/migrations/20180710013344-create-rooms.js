module.exports = {
    up: (queryInterface, Sequelize) => 
        queryInterface.createTable('rooms', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            room_name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            latitude_low: {
                type: Sequelize.FLOAT
            },
            latitude_high: {
                type: Sequelize.FLOAT
            },
            longitude_low: {
                type: Sequelize.FLOAT
            },
            longitude_high: {
                type: Sequelize.FLOAT
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
            level_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'levels',
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
        queryInterface.dropTable('rooms');
    }
};