const joi = require('joi')
const { user } = require('pg/lib/defaults')

const userId = joi.number()

const reportSchema = joi.object({
    userId: userId.required()
})

module.exports = {reportSchema}