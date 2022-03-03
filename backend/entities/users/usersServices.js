const boom = require('@hapi/boom')
const { models } = require('../../libs/sequelize')


const create = async (user)=>{
    await models.User.create(user)
    return
}

const getById = async (userId) =>{
    const user = await models.User.findByPk(userId,{
        attributes:['id','username','email']
    })
    if(!user){
        throw boom.notFound('user not found')
    }else{
        return user
    }
}

const getByEmail = async (email) =>{
    const user = await models.User.findOne({where:{email}})
    return user
}

const update = async (userId, userUpdates )=>{
    const user = await models.User.findByPk(userId)
    const updates = {...userUpdates}
    const pepe = await user.update(updates)
    return
}

module.exports = {getById, getByEmail, create , update}