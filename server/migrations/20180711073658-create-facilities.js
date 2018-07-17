'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('facilities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      equipments_type_basic_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'medical_equipments_type_basics',
          key: 'id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      },
      equipments_type_medium_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'medical_equipments_type_media',
          key: 'id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      },
      equipments_type_high_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'medical_equipments_type_highs',
          key: 'id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      },
      facilities_name: {
        type: Sequelize.STRING
      },
      facilities_desc: {
        type: Sequelize.STRING
      },
      facilities_sn: {
        type: Sequelize.STRING
      },
      facilities_qrcode: {
        type: Sequelize.STRING
      },
      facilities_status: {
        type: Sequelize.BOOLEAN
      },
      facilities_loc: {
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
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('facilities');
  }
};