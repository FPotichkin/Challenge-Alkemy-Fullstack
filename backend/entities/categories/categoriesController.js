const services = require('./categoriesServices')

const getAll = async (req,res,next)=>{
    try {
        const categoriesList = await services.getAll() 
        res.json({
            data:{
                categoriesList
            }
        })
    } catch (err) {
        next(err)
    }
}

const getById = async (req,res,next) =>{
    try {
        const operationsList = await services.getById(req.params.id, req.query.userId)
        res.json({
            data:{
                operationsList
            }
        })
    } catch (err) {
        next(err)
    }
}

module.exports = { getAll, getById}