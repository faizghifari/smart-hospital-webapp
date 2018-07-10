'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('medical_devices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      device_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      device_desc: {
        type: Sequelize.STRING
      },
      device_loc: {
        type: Sequelize.STRING
      },
      device_pic: {
        type: Sequelize.STRING
      },
      device_status: {
        type: Sequelize.BOOLEAN
      },
      production_date: {
        type: Sequelize.DATE
      },
      is_on: {
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
      device_type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'medical_devices_types',
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
    return queryInterface.dropTable('medical_devices');
  }
};