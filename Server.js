const express = require('express')
const ConnectDB = require('./Config/ConnectDB')
const UserRouter = require('./Routes/User')

const app = express()
const port = 5000
ConnectDB()
app.use(express.json())
app.use('/api/User',UserRouter)



app.listen(port,console.log(`server is running on port ${port}`))