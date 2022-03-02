const express = require('express')
const categoriesController = require('./categoriesController')
const { validatorHandler } = require('../../middlewares/validatorHandler')
const { findByCategoryParams, findByCategoryQuery } = require('./categoriesSchema')
const { authHandler } = require('../../middlewares/authHandler')

const router = express.Router()

//#region Swagger Component

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: Categoryless
 */
//#endregion

//#region Swagger get All
/**
 * @swagger
 * /categories/:
 *   get:
 *     tags:
 *       - categories
 *     summary: Retrieve all categories available.
 *     responses:
 *       200:
 *         description: Categories list.                    
 */
//#endregion
router.get('/', categoriesController.getAll)

//#region Swagger get by id
/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - categories
 *     summary: Retrieve all operations related to a specific category.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: category id  
 *       - in: query
 *         name: userId
 *         required: true  
 *     responses:
 *       200:
 *         description: List of operations by category.  
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
 */
//#endregion
router.get('/:id', validatorHandler(findByCategoryParams,'params'), validatorHandler(findByCategoryQuery,'query'), authHandler('query'), categoriesController.getById)

module.exports = router