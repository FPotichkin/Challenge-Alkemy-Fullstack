const express = require('express')
const usersController = require('./usersController')
const { validatorHandler } = require('../../middlewares/validatorHandler')
const { findSchema, updateSchema } = require('./usersSchema')

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
 *      404:
 *        description: User not Found
 *        content:
 *           application/json:
 *              schema:
 *                  type:object
 *                  properties:
 *                      error:
 *                          msg: 'user not found'
 *                       
 */

router.get('/:userId', validatorHandler(findSchema,'params'), usersController.getById)


module.exports = router