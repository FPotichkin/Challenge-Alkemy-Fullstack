'use strict';

const { USER_TABLE } = require("../models/userModel");


module.exports = {
  async up (queryInterface) {

    await queryInterface.bulkInsert(USER_TABLE, [
      {
        username: 'Joe',
        email: 'joe@mail.com',
        password: 'joe123'
      },
      {
        username: 'Jane',
        email: 'jane@mail.com',
        password: 'jane123'
      }
    ]);
  },

  async down (queryInterface) {
    
    await queryInterface.bulkDelete(USER_TABLE, null,{});
  }
};
