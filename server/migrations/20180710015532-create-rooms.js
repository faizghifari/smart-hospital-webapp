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
      room_pic: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable('rooms');
  }
};