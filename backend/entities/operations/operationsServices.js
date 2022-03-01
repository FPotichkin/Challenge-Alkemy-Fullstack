const { models } = require('../../libs/sequelize')

const getAll = async (userId) =>{
    console.log('services')
    const operationsList = await models.Operation.findAll({where:{userId}})
    return operationsList
}


module.exports = {getAll }