const services = require('./operationsServices')


const getAllByUser = async (req,res,next)=>{

    try {
        const operationsList = await services.getAll(req.query.userId)
        res.json({
            data:{
                operationsList
            }
        })
    } catch (err) {
        next(err)
    }
}

const create = async (req, res, next) =>{
    try {
        await services.create(req.body)
        res.json({
            data:{
                msg:'created succesfully'
            }
        })
    } catch (err) {
        next(err)
    }
}

const update = async (req, res, next )=>{
    try {
        await services.update(req.body)
        res.json({
            data:{
                msg: 'updated succesfully'
            }
        })
    } catch (err) {
        next(err)
    }
}


module.exports = { getAllByUser, create, update }