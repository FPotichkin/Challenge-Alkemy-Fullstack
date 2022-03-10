const joi = require('joi')

const username = joi.string()
const email = joi.string()
const password = joi.string()
const id = joi.number()

const createUserSchema = joi.object(
    {
        username: username.required(),
        email: email.required(),
        password: password.required()
    }
)

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

module.exports = { createUserSchema, findSchema, updateSchema }