const boom = require('@hapi/boom')
const { response } = require('express')
const res = require('express/lib/response')
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

const getById = async(id)=>{
    const operation = await models.Operation.findByPk(id)
    if(!operation){
        throw boom.notFound('operation not found')
    }else{
        return operation
    }
}

const update = async (operationUpdates)=>{
    const operationTarget = await getById(operationUpdates.id)
    if(operationTarget.userId === operationUpdates.userId){
        const changes = {...operationUpdates}
        await operationTarget.update(changes)
    }else{
        throw boom.forbidden('operation belongs to other user')
    }
}

const remove = async (id, userId)=>{
    const operationTarget = await getById(id)

    if(operationTarget.userId == userId){
        await operationTarget.destroy(id)
    }else{
        throw boom.forbidden('operation belongs to other user')
    }
}

module.exports = {getAll, create, update, remove }