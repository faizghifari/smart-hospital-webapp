'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('buildings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      building_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      building_pic: {
        type: Sequelize.STRING
      },
      count_levels: {
        type: Sequelize.INTEGER
      },
      count_rooms: {
        type: Sequelize.INTEGER
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
      hospital_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'hospitals',
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
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('buildings');
  }
};