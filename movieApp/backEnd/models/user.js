const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    userId: {type:Number, required:true},
    firstName: {type: String, required:true},
    lastName: {type:String, required:true},
    userName: {type:String, required: true},
    role: {type:String, reqiired : true},
    address : {type: String , required :true},
    email: {type :String, required:true},
    password : {type :String, required :true}

})
module.exports = mongoose.model('User', userSchema)