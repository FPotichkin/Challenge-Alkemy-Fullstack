const joi = require('joi')

const id = joi.number()
const concept = joi.string()
const quantity = joi.number()
const date = joi.date()
const type = joi.string()
const categoryId = joi.number()
const userId = joi.number()
const limit = joi.number()

const findAllByUserSchema = joi.object({
    userId: userId.required(),
    limit
})

module.exports = {findAllByUserSchema}