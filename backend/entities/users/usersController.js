const services = require('./usersServices')

const getById = async (req,res,next) =>{
    try {
        const user = await services.getById(req.params.userId)
        res.json({
            data:{
                user
            }
        })
    } catch (err) {
        next(err)
    }
}

const update = async (req,res,next)=>{
    try {
        await services.update(req.body.userId, req.body)
        res.json({
            msg: 'updated succesfully'
        })
    } catch (err) {
        next(err)
    }
}


module.exports = {getById, update}