'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('states-history', [{
        state_id: 1,
        date_time: '2018-08-09 07:42:28',
        record_safety: 3,
        record_security: 3,
        record_productivity: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        state_id: 2,
        date_time: '2018-08-09 07:42:28',
        record_safety: 2,
        record_security: 3,
        record_productivity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        state_id: 3,
        date_time: '2018-08-09 07:42:28',
        record_safety: 1,
        record_security: 1,
        record_productivity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('states-history', null, {});
  }
};
