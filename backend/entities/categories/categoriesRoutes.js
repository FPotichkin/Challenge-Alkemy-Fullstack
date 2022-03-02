const express = require('express')
const categoriesController = require('./categoriesController')

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


module.exports = router