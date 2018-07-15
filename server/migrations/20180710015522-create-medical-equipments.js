module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('medical_equipments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      equipments_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      equipments_desc: {
        type: Sequelize.STRING
      },
      equipments_loc: {
        type: Sequelize.STRING
      },
      equipments_pic: {
        type: Sequelize.STRING
      },
      equipments_pic_mt: {
        type: Sequelize.STRING
      },
      equipments_pic_usage: {
        type: Sequelize.STRING
      },
      equipments_sn: {
        type: Sequelize.STRING
      },
      is_active: {
        type: Sequelize.BOOLEAN
      },
      equipmentss_qrcode: {
        type: Sequelize.STRING
      },
      equipments_status: {
        type: Sequelize.BOOLEAN
      },
      equipments_lifetime: {
        type: Sequelize.INTEGER
      },
      equipments_value: {
        type: Sequelize.INTEGER
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
      equipment_type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'medical_equipments_types',
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
    queryInterface.dropTable('medical_equipments');
  }
};