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