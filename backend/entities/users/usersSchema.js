const joi = require('joi')

const username = joi.string()
const password = joi.string()
const id = joi.number()

const findSchema = joi.object(
    {
        userId: id.required()
    }
)
const updateSchema = joi.object(
    {
        userId : id.required(),
        username: username,
        password: password
    }
)

module.exports = { findSchema, updateSchema }