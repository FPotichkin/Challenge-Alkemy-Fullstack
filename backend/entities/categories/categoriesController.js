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

module.exports = { getAll }