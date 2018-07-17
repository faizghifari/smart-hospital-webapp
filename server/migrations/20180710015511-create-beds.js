module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('beds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bed_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bed_desc: {
        type: Sequelize.STRING
      },
      bed_status: {
        type: Sequelize.BOOLEAN
      },
      production_date: {
        type: Sequelize.DATE
      },
      is_used: {
        type: Sequelize.BOOLEAN
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
      room_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'rooms',
          key: 'id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      },
      pic_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
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
    queryInterface.dropTable('beds');
  }
};