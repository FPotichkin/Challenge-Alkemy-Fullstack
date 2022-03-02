const boom = require('@hapi/boom')
const jwt = require('jsonwebtoken')
const userService = require('../users/usersServices')

const login = async (email, password) =>{
    const user = await userService.getByEmail(email)

    if(!user || user.password != password ){
        throw boom.notAcceptable('wrong credentials')
    }
    const token = jwt.sign({
        userId: user.userId,
        username: user.username
    }, 'supersecret',{expiresIn: '1d'})

    return({token, userId:user.id})
}

const create = async (user)=>{
    await userService.create(user)
    return
}

module.exports = { login, create }