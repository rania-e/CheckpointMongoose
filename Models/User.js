const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name : {type : String , default : 'djeja'},
    age : Number,
    email : {type : String, unique: true, required : true}
})

module.exports = mongoose.model('UserList', UserSchema)