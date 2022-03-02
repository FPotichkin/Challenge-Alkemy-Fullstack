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



module.exports = {getById}