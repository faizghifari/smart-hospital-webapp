module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.createTable('medical_equipments_safeties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      equipment_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'medical_equipments',
          key: 'id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      },
      equipments_age: {
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
    queryInterface.dropTable('medical_equipments_safeties');
  }
};