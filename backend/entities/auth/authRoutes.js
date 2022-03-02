const express = require('express')
const authController = require('./authController')

const router = express.Router()

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
 *       400:
 *          description: Wrong credentials
 *          content:
 *              application/json:
 *                  schema:
*                       type: object
*                       properties:
*                           statusCode:
*                               type: integer
*                               example: 401
*                           error:
*                               type: string
*                               example: Unauthorized
 *                       
 */
router.post('/login', authController.login)


module.exports = router