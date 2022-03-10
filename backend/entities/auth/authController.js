const service = require('./authServices')

const login = async (req,res,next) =>{
    try {
        const {token, userId} = await service.login(req.body.email, req.body.password)
        res.json({
            data:{
                token,
                userId
            }
        })
    } catch (err) {
        next(err)
    }
}

const register = async (req,res,next) =>{
    try {
        await service.create(req.body)
        res.status(201).json({
            msg:'created'
        })
    } catch (err) {
        next(err)
    }
}

module.exports = { login, register }