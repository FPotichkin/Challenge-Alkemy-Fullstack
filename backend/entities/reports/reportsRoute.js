const express = require('express')
const { authHandler } = require('../../middlewares/authHandler')
const { validatorHandler } = require('../../middlewares/validatorHandler')
const { reportSchema } = require('./reportsSchema')
const reportController = require('./reportsController')
const router = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     Report:
 *       type: object
 *       properties:
 *         balance:
 *           type: integer
 *           example: 233
 */

/**
 * @swagger
 * /reports/:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - reports
 *     summary: Retrieve a balance of all the operations of the user.
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         description: User id.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User balance.
 *         content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      data:
 *                          $ref: '#/components/schemas/Report'
 *                       
 */
router.get('/', validatorHandler(reportSchema,'query'),authHandler('query'), reportController.getBalance)

module.exports = router