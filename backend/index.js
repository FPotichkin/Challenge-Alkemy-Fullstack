const express = require('express')
const cors = require('cors')

const routes = require('./routes')
const swaggerRouter = require('./docs/swagger.js')
const { boomErrorHandler, uniqueErrorHandler, serverErrorHandler } = require('./middlewares/errorHandler')
const { application_name } = require('pg/lib/defaults')

const app = express()

app.use(cors())
app.use(express.json())


app.use('/api/docs', swaggerRouter)
app.use('/api',routes)


// error middlewares
app.use(boomErrorHandler)
app.use(uniqueErrorHandler)
app.use(serverErrorHandler)


app.listen(8000,()=>{
    console.log(`Listening to port 8000`)
})