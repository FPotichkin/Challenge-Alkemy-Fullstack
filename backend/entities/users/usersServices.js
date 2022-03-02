const boom = require('@hapi/boom')
const { models } = require('../../libs/sequelize')

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

const update = async (userId, userUpdates )=>{
    const user = await models.User.findByPk(userId)
    const updates = {...userUpdates}
    console.log(updates)
    const pepe = await user.update(updates)
    return
}

module.exports = {getById, update}