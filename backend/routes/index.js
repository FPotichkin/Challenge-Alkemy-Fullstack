const express = require('express')
const operationsRoutes = require('../entities/operations/operationsRoutes')

const router = express.Router()


router.use('/operations', operationsRoutes)


module.exports = router