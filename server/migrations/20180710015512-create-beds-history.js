module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.createTable('beds_histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bed_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'beds',
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
    queryInterface.dropTable('beds_histories');
  }
};