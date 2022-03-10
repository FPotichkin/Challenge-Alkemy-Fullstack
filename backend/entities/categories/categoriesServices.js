const boom = require('@hapi/boom')
const { models } = require('../../libs/sequelize')

const getAll = async ()=>{
    const categoriesList = await models.Category.findAll()
    console.log(categoriesList)
    return categoriesList
}

const getById = async (id, userId) =>{
    const operationsList = await models.Category.findByPk(id,{
        include:
        [{
            model: models.Operation,
            as: 'operations',
            where: { userId }
        }]
    })
    if(!operationsList){
        return []
    }
    return operationsList
}

module.exports = { getAll, getById }