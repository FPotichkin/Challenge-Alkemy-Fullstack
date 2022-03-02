const express = require('express')
const authController = require('./authController')

const router = express.Router()

/** 
 * @swagger
 * components:
 *   securitySchemes:
 *      bearerAuth:
 *          type: http
 *          scheme: bearer
 *          bearerFormat: JWT
*/


/**
 * @swagger
 * /auth/login/:
 *   post:
 *     tags:
 *       - authentication
 *     summary: check credentials, give token.
 *     requestBody:
 *        content:
 *           'application/json':
 *              schema:
 *                  type: object
 *                  properties:
 *                      email:
 *                          type: string
 *                          required: true
 *                          example: joe@mail.com
 *                      password:
 *                          type: string
 *                          required: true
 *                          example: joe123
 *     responses:
 *       200:
 *         description: Logged.
 *         content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      token:
 *                          type: string
 *                          example: efe12r.erga1sd3fef3.ef31ga2
 *                      userId:
 *                          type: integer
 *                          example: 1
 *       406:
 *          description: Wrong credentials
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          statusCode:
 *                              type: integer
 *                              example: 401
 *                          error:
 *                              type: string
 *                              example: Not acceptable
 *                       
 */
router.post('/login', authController.login)

/**
 * @swagger
 * /auth/register/:
 *   post:
 *     tags:
 *       - authentication
 *     summary: create user.
 *     requestBody:
 *         content:
 *           'application/json':
 *              schema:
 *                  type: object
 *                  properties:
 *                      username:
 *                          type: string
 *                          required: true
 *                          example: Jose
 *                      email:
 *                          type: string
 *                          required: true
 *                          example: jose@mail.com
 *                      password:
 *                          type: string
 *                          required: true
 *                          example: jose123
 *     responses:
 *       200:
 *         description: Registed.
 *         content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      msg:
 *                          type: string
 *                          example: created
 *       400: 
 *          description: Validation error
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          statusCode:
 *                              type: integer
 *                              example: 400
 *                          error:
 *                              type: string
 *                              example: bad request
 *                          msg:
 *                              type: string
 *                              example: username required
 *       409:
 *          description: Unique violation
 * 
 */
router.post('/register', authController.register)



module.exports = router