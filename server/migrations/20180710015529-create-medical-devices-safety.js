module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.createTable('medical_devices_safeties', {
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
      device_age: {
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
  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable('medical_devices_safeties');
  }
};