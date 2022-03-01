'use strict';

const { OPERATION_TABLE } = require("../models/operationModel");

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert(OPERATION_TABLE,[
      {
        category_id: 5,
        concept: 'Mc Donalds',
        date: new Date(),
        type: 'Withdraw',
        quantity: 500,
        user_id: 1
      },
      {
        category_id: 9,
        concept: 'Uber',
        date: new Date(),
        type: 'Withdraw',
        quantity: 700,
        user_id: 1
      }
    ],{});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete(OPERATION_TABLE, null, {});
    
  }
};
