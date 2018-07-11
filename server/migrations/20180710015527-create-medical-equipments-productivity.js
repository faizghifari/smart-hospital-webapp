module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('medical_equipments_productivities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      equipments_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'medical_equipments',
          key: 'id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      },
      count_usage: {
        type: Sequelize.INTEGER
      },
      standard_usage: {
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
    queryInterface.dropTable('medical_equipments_productivities');
  }
};