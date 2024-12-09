const express = require('express')
const { addUser, getUsers, getOneUser, UpdateUser, deleteUser } = require('../Controllers/User')
const UserRouter = express.Router()

UserRouter.post('/addUser', addUser)

UserRouter.get('/getUsers', getUsers)

UserRouter.get('/getOneUser/:id', getOneUser)

UserRouter.put('/updateUser/:id', UpdateUser)

UserRouter.delete('/deleteUser/:id', deleteUser)

module.exports = UserRouter