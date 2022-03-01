const express = require('express')
const { validatorHandler } = require('../../middlewares/validatorHandler')
const operationsController = require('./operationsController')
const { findAllByUserSchema, createSchema } = require('./operationsSchema')

const router = express.Router()


/**
 * @swagger
 * components:
 *   schemas:
 *     Operation:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         categoryId:
 *           type: integer
 *           example: 1
 *         concept:
 *           type: string
 *           example: Mc Donalds
 *         date:
 *           type: string
 *           example: 2022-02-07T11:05:33.000Z
 *         type:
 *           type: string
 *           example: Withdraw
 *         quantity:
 *           type: float
 *           example: 500
 *         userId:
 *           type: integer
 *           example: 1
 */

/**
 * @swagger
 * /operations/:
 *   get:
 *     tags:
 *       - operations
 *     summary: Retrieve all operations of the user.
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         description: User id.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Operations detail.
 *         content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      data:
 *                          $ref: '#/components/schemas/Operation'
 *       400:
 *         description: Validation Error
 *         content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      errors:
 *                          msg: 'userId must be a number'
 *                       
 */


router.get('/', validatorHandler(findAllByUserSchema,'query'),operationsController.getAllByUser)


/**
 * @swagger
 * /operations/:
 *   post:
 *     tags:
 *       - operations
 *     summary: Create a new operation.
 *     requestBody:
 *        content:
 *           'application/json':
 *              schema:
 *                  type: object
 *                  properties:
 *                      categoryId:
 *                          type: integer
 *                          required: true
 *                          example: 5
 *                      concept:
 *                          type: string
 *                          required: true
 *                          example: Mc Donalds
 *                      date:
 *                          type: string
 *                          required: true
 *                          example: 2022-02-07T11:05:33.000Z
 *                      type:
 *                          type: string
 *                          required: true
 *                          example: Withdraw
 *                      quantity:
 *                          type: float
 *                          required: true
 *                          example: 500
 *                      userId:
 *                          type: integer
 *                          required: true
 *                          example: 1
 *     responses:
 *       201:
 *         description: Operation created.
 *         content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      msg:
 *                          type: string
 *                          example: created succesfully
 *       400:
 *         description: Validation Error
 *         content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      errors:
 *                          msg: string
 *                          example: 'categoryId required'
 *                       
 */
 router.post('/', validatorHandler(createSchema,'body'), operationsController.create)


module.exports = router