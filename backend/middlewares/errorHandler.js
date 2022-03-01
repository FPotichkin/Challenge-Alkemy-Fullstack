const { ValidationError } = require("sequelize")

function boomErrorHandler(err, req, res, next){
    if(err.isBoom){
        const { output } = err
        res.status(output.statusCode).json(output.payload)
    }else{
        next(err)
    }
}

function uniqueErrorHandler(err, req, res, next){
    if(err instanceof ValidationError){
        res.status(409).json({
                msg: err.name,
                errors: err.errors
        })
    }
}

module.exports = {boomErrorHandler, uniqueErrorHandler}