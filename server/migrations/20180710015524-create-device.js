module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('devices', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            device_sn: {
                type: Sequelize.STRING
            },
            device_qrcode: {
                type: Sequelize.STRING
            },
            device_sensors: {
                type: Sequelize.ARRAY(Sequelize.JSON)
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
        return queryInterface.dropTable('devices');
    }
};