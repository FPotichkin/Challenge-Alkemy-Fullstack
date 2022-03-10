'use strict';

const { CATEGORY_TABLE, CategorySchema } = require("../models/categoryModel");
const { OPERATION_TABLE, OperationSchema } = require("../models/operationModel");
const { USER_TABLE, UserSchema } = require("../models/userModel");



module.exports = {
  async up (queryInterface) {
    
    await queryInterface.createTable(USER_TABLE, UserSchema)
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema)
    await queryInterface.createTable(OPERATION_TABLE, OperationSchema)
  },

  async down (queryInterface) {

    await queryInterface.dropTable(OPERATION_TABLE)
    await queryInterface.dropTable(CATEGORY_TABLE)
    await queryInterface.dropTable(USER_TABLE)
  }
};
