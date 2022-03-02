const express = require('express')
const operationsRoutes = require('../entities/operations/operationsRoutes')
const categoriesRoutes = require('../entities/categories/categoriesRoutes')
const usersRoutes = require('../entities/users/usersRoutes')

const router = express.Router()

router.use('/users', usersRoutes)
router.use('/categories', categoriesRoutes)
router.use('/operations', operationsRoutes)


module.exports = router