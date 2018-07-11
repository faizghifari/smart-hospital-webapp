module.exports = {
  up: (queryInterface, Sequelize) => {
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
      bed_loc: {
        type: Sequelize.STRING
      },
      bed_pic: {
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
    return queryInterface.dropTable('beds');
  }
};