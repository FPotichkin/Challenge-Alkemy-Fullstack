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
        
    }
}

const create = async (req, res, next) =>{
    try {
        await services.create(req.body)
        res.json({
            data:{
                msg:'created'
            }
        })
    } catch (err) {
        
    }
}


module.exports = { getAllByUser, create }