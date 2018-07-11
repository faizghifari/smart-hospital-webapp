module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.createTable('medical_devices_histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      device_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'medical_devices',
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
  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable('medical_devices_histories');
  }
};