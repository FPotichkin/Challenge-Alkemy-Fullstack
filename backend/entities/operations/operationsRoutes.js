const express = require('express')
const { authHandler } = require('../../middlewares/authHandler')
const { validatorHandler } = require('../../middlewares/validatorHandler')
const operationsController = require('./operationsController')
const { findAllByUserSchema, createSchema, updateSchema, deleteParamsSchema, deleteQuerySchema } = require('./operationsSchema')

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
 *     security:
 *       - bearerAuth: []
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


router.get('/', validatorHandler(findAllByUserSchema,'query'), authHandler('query'),operationsController.getAllByUser)


/**
 * @swagger
 * /operations/:
 *   post:
 *     security:
 *       - bearerAuth: []
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
 router.post('/', validatorHandler(createSchema,'body'), authHandler('body'), operationsController.create)

/**
 * @swagger
 * /operations/:
 *   patch:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - operations
 *     summary: Update a operation
 *     requestBody:
 *        content:
 *           'application/json':
 *              schema:
 *                  type: object
 *                  properties:
 *                      id:
 *                          type: integer
 *                          required: true
 *                          example: 1
 *                      userId:
 *                          type: integer
 *                          required: true
 *                          example: 1
 *                      categoryId:
 *                          type: integer
 *                          example: 2
 *                      concept:
 *                          type: string
 *                          example: Cinema
 *                      date:
 *                          type: string
 *                          example: 2022-02-09T11:05:33.000Z
 *                      quantity:
 *                          type: float
 *                          example: 300
 *     responses:
 *       200:
 *         description: Operation updated.
 *         content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      msg:
 *                          type: string
 *                          example: updated succesfully
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
 *       403:
 *          description: Operation belongs to other user
 *          content:
 *              application/json:
 *                  schema:
*                       type: object
*                       properties:
*                           statusCode:
*                               type: integer
*                               example: 403
*                           error:
*                               type: string
*                               example: Forbidden
*                           message:
*                               type: string
*                               example: operation belongs to other user
 *       404:
 *          description: Not Found
 *          content:
 *              application/json:
 *                  schema:
 *                      properties:
 *                          error:
 *                              msg: string
 *                              example: 'operation not found' 
 */
 router.patch('/', validatorHandler(updateSchema, 'body'), authHandler('body'), operationsController.update)

/**
 * @swagger
 * /operations/{id}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - operations
 *     summary: Update a operation
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: operation id  
 *       - in: query
 *         name: userId
 *         required: true  
 *     responses:
 *       200:
 *         description: Operation deleted.
 *         content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      msg:
 *                          type: string
 *                          example: updated succesfully
 *       400:
 *         description: Validation Error
 *         content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      errors:
 *                          msg: string
 *                          example: 'userId required'
 *       403:
 *          description: Operation belongs to other user
 *          content:
 *              application/json:
 *                  schema:
*                       type: object
*                       properties:
*                           statusCode:
*                               type: integer
*                               example: 403
*                           error:
*                               type: string
*                               example: Forbidden
*                           message:
*                               type: string
*                               example: operation belongs to other user
 *       404:
 *          description: Not Found
 *          content:
 *              application/json:
 *                  schema:
 *                      properties:
 *                          error:
 *                              msg: string
 *                              example: 'operation not found' 
 */
 router.delete('/:id',validatorHandler(deleteParamsSchema,'params'), validatorHandler(deleteQuerySchema,'query'), authHandler('query'), operationsController.remove)


module.exports = router