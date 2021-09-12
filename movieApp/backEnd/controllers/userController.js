/**
 * @ author Jyoti R. Khatri
 * @ since Aug 10 2021
 */
const UserCollection = require('../models/user')

exports.getAllUsers = async (req, res,next) => {
    try{
    const allUsers = await UserCollection.find()
    res.status(200).json(allUsers)

    }catch (error) {
        next(error)
    }
    
}

exports.getUserById = async(req, res, next) => {
    try{
        const user = await UserCollection.findOne({userId : req.params.uId});
        res.status(200).json(user)
    }catch(error){
        next(error)
    }
}

exports.addUser = async(req, res, next) => {
    console.log("userRouter")
    try{
        console.log(req.body)
        const user = await UserCollection(req.body).save();
        res.status(200).json(user)
    }catch (error){
        next(error)
    }
}

exports.updateUser = async(req, res, next) => {
    try{
        const updatedUser = await UserCollection.updateOne({userId : Number(req.params.uId)}, {$set:req.body});
        res.status(200).json(updatedUser)
    }catch{
        next(error)
    }
}

exports.deleteUser = async (req, res, next) => {
    try{
        const deletedUser = await UserCollection.deleteOne({userId: req.params.uId});
        res.status(200).json(deletedUser)
    }catch(error){
        next(error)
    }
}