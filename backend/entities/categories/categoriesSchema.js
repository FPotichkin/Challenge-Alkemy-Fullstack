const joi = require('joi')

const id = joi.number()
const userId = joi.number()

const findByCategoryParams = joi.object({
    id: id.required()
})

const findByCategoryQuery = joi.object({
    userId: userId.required()
})

module.exports = { findByCategoryParams, findByCategoryQuery }