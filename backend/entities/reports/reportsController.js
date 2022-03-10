const services = require('./reportsServices')

const getBalance = async (req,res,next)=>{
    try {
        const balance = await services.calcBalance(req.query.userId)
        res.json({
            data: {
                balance
            }
        })
    } catch (err) {
        next(err)
    }
}

module.exports = { getBalance } 