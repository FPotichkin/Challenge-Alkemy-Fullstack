const express = require('express')
const operationsRoutes = require('../entities/operations/operationsRoutes')
const categoriesRoutes = require('../entities/categories/categoriesRoutes')

const router = express.Router()

router.use('/categories', categoriesRoutes)
router.use('/operations', operationsRoutes)


module.exports = router