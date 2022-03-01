const { models } = require('../../libs/sequelize')

const getAll = async (userId) =>{
    console.log('services')
    const operationsList = await models.Operation.findAll({where:{userId}})
    return operationsList
}
const create = async (operation) =>{
    const newOperation = await models.Operation.create(operation)
    return newOperation
}

module.exports = {getAll, create }