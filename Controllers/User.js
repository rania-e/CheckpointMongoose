const User = require("../Models/User")

exports.addUser = async(req,res)=>{
    try {
        const found = await User.findOne({email : req.body.email})
        if (found){
            return res.status(400).send({msg : 'email already exists'})
        }
        const userToAdd = new User(req.body)
        await userToAdd.save()
        res.status(200).send({msg : 'user added', userToAdd})
    } catch (error) {
        res.status(500).send({msg : 'could not add user'})

    }
}

exports.getUsers = async(req,res)=>{
    try {
        const users = await User.find()
        res.status(200).send({msg : "list of users", users})
    } catch (error) {
        res.status(500).send({msg : "couldn t get users"})
    }
}

exports.getOneUser = async(req,res)=>{
    try {
        const {id} = req.params
        const user1 = await User.findById(id)
        res.status(200).send({msg : "user information", user1})
    } catch (error) {
        res.status(500).send({msg : "could not get user"})
    }
}

exports.UpdateUser = async(req,res)=> {
    try {
        const {id} = req.params
        if (typeof(req.body.age) == 'string'){
            return res.status(400).send({msg : "ya bhim"})
        }
        await User.findByIdAndUpdate(id, {$set : req.body})
        res.status(200).send({msg : 'ahawa'})
    } catch (error) {
        res.status(500).send({msg : "could not update user"})
    }
}

exports.deleteUser = async(req,res)=>{
    try {
        const {id} = req.params
        await User.findByIdAndDelete(id)
        res.status(200).send({msg : "fassakhtou"})
    } catch (error) {
        res.status(500).send({msg : "could not delete"})
    }
}