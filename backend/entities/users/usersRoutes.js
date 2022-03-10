const express = require('express')
const usersController = require('./usersController')
const { validatorHandler } = require('../../middlewares/validatorHandler')
const { findSchema, updateSchema } = require('./usersSchema')
const { authHandler } = require('../../middlewares/authHandler')


const router = express.Router()


/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         username:
 *           type: string
 *           example: Joe
 *         email:
 *           type: string
 *           example: joe@mail.com
 *         password:
 *           type: string
 *           example: joe123
 */

/**
 * @swagger
 * /users/{userId}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - users
 *     summary: Get user info.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: user id 
 *     responses:
 *       200:
 *         description: User update.
 *         content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      data:
 *                          type: string
 *                          example: user info
 *       400:
 *         description: Validation Error
 *         content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      errors:
 *                          msg: 'userId must be a number'
 *       404:
 *         description: User not Found
 *         content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      error:
 *                          msg: 'user not found'
 *                       
 */

router.get('/:userId', validatorHandler(findSchema,'params'), authHandler('params'), usersController.getById)

/**
 * @swagger
 * /users/:
 *   patch:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *      - users
 *     summary: Update user.
 *     requestBody:
 *       content:
 *           'application/json':
 *              schema:
 *                  type: object
 *                  properties:
 *                      userId:
 *                          type: integer
 *                          required: true
 *                          example: 1
 *                      username:
 *                          type: string
 *                          example: Roberto
 *                      password:
 *                          type: string
 *                          example: roberto123
 *     responses:
 *       200:
 *         description: User update.
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
 *                          msg: 'userId must be a number'
 *       404:
 *         description: User not Found
 *         content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      error:
 *                          msg: 'user not found'                                             
 */
 router.patch('/', validatorHandler(updateSchema, 'body'), authHandler('body'), usersController.update)

module.exports = router