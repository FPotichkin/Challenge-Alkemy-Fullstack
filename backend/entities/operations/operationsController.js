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




module.exports = { getAllByUser }