const joi = require('joi')

const username = joi.string()
const password = joi.string()
const id = joi.number()

const findSchema = joi.object(
    {
        userId: id.required()
    }
)



module.exports = { findSchema }