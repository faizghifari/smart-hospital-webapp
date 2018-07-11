module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('beds_securities', {
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
      current_loc: {
        type: Sequelize.STRING
      },
      current_pic: {
        type: Sequelize.STRING
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
    queryInterface.dropTable('beds_securities');
  }
};