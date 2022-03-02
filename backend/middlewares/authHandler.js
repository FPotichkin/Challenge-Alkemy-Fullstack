const boom = require('@hapi/boom')
const jwt = require('jsonwebtoken')

function authHandler(property){
    return(req, res, next )=>{
        const bearer = req.headers.authorization
        if(!bearer){
            next(boom.forbidden('Token needed'))
        }else{
            const token = bearer.slice(7)
            try {
                const payload = jwt.verify(token,'supersecret')

                const userId = req[property].userId
                console.log(payload)
                console.log(userId)
                if(payload.userId != userId){
                    next(boom.unauthorized('Token invalidd'))
                }else{
                    next()
                }
            } catch (err) {
                next(boom.unauthorized('Token invalid'))
            }
        }
    }
}

module.exports = { authHandler }