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

module.exports = {getById}