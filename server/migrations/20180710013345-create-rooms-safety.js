module.exports = {
    up: (queryInterface, Sequelize) => 
        queryInterface.createTable('rooms_safeties', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            room_id: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                allowNull: false,
                references: {
                    model: 'rooms',
                    key: 'id',
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            current_temperature: {
                type: Sequelize.INTEGER
            },
            current_humidity: {
                type: Sequelize.INTEGER
            },
            current_smoke: {
                type: Sequelize.INTEGER
            },
            current_co: {
                type: Sequelize.INTEGER
            },
            current_methane: {
                type: Sequelize.INTEGER
            },
            current_lpg: {
                type: Sequelize.INTEGER
            },
            current_light: {
                type: Sequelize.INTEGER
            },
            current_led: {
                type: Sequelize.INTEGER
            },
            current_freq: {
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
        queryInterface.dropTable('rooms_safeties');
    }
};