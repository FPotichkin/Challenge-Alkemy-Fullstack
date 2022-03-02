const boom = require('@hapi/boom')
const { models } = require('../../libs/sequelize')

const getAll = async ()=>{
    const categoriesList = await models.Category.findAll()
    console.log(categoriesList)
    return categoriesList
}

module.exports = { getAll }