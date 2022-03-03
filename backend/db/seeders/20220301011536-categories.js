'use strict';

const { CATEGORY_TABLE } = require("../models/categoryModel");

module.exports = {
  async up (queryInterface) {
    
    await queryInterface.bulkInsert(CATEGORY_TABLE, [
      {
        name : 'Categoryless'
      },
      {
        name: 'Entertainment'
      },
      {
        name: 'Health'
      },
      {
        name: 'Holidays'
      },
      {
        name: 'Restaurants & Pubs'
      },
      {
        name: 'Services'
      },
      {
        name: 'Shopping'
      },
      {
        name: 'Supermarket'
      },
      {
        name: 'Transport'
      },
      {
        name: 'Wage'
      }
    ],{});

  },

  async down (queryInterface) {
 
    await queryInterface.bulkDelete(CATEGORY_TABLE, null,{});
  }
};
