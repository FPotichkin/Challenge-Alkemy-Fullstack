const joi = require('joi')

const id = joi.number()
const concept = joi.string()
const quantity = joi.number()
const date = joi.date()
const type = joi.string()
const categoryId = joi.number()
const userId = joi.number()
const limit = joi.number()

const findAllByUserSchema = joi.object(
    {
        userId: userId.required(),
        limit
    }
)
const createSchema = joi.object(
    {
        concept: concept.required(),
        quantity: quantity.required(),
        date: date.required(),
        type: type.required(),
        userId: userId.required(),
        categoryId: categoryId.required()
    }
)

const updateSchema = joi.object({
    concept,
    categoryId,
    date,
    quantity,
    userId: userId.required(),
    id: id.required()
})


module.exports = {findAllByUserSchema, createSchema, updateSchema}