module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.createTable('rooms_securities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      room_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'rooms',
          key: 'id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      },
      is_unauthorized: {
        type: Sequelize.BOOLEAN
      },
      is_locked: {
        type: Sequelize.BOOLEAN
      },
      is_pic_exist: {
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
    queryInterface.dropTable('rooms_securities');
  }
};