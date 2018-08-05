'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('hospitals', [{
        hospital_name: 'RS Taman Bungkul',
        count_buildings: 5,
        count_rooms: 500,
        current_safety: 3,
        current_security: 3,
        current_productivity: 3,
        state_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        hospital_name: 'RS Lapangan Merdeka',
        count_buildings: 3,
        count_rooms: 300,
        current_safety: 2,
        current_security: 3,
        current_productivity: 1,
        state_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        hospital_name: 'RS Santo Borromeus',
        count_buildings: 9,
        count_rooms: 900,
        current_safety: 1,
        current_security: 1,
        current_productivity: 1,
        state_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('hospitals', null, {});
  }
};
