'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('states', [{
        state_name: 'UTM',
        count_hospitals: 5,
        current_safety: 3,
        current_security: 3,
        current_productivity: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        state_name: 'Taman U',
        count_hospitals: 3,
        current_safety: 2,
        current_security: 3,
        current_productivity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        state_name: 'Sri Pulai',
        count_hospitals: 10,
        current_safety: 1,
        current_security: 1,
        current_productivity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('states', null, {});
  }
};
