'use strict';

const { OPERATION_TABLE } = require("../models/operationModel");

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert(OPERATION_TABLE,[
      {
        'categoryId': '5',
        'concept': 'Mc Donalds',
        'date': '2022-02-07T11:05:33.000Z',
        'type': 'Withdraw',
        'quantity': '500',
        'userId': '1'
      },{
        'categoryId': '9',
        'concept': 'Uber',
        'date': '2022-02-07T11:05:33.000Z',
        'type': 'Withdraw',
        'quantity': '700',
        'userId': '1'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
