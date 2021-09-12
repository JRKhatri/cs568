const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema ({
    movieId:{type:Number, required: true},
    name : {type : String, required : true},
    rating: {type : Number, required : true},
    genre : {type : String, required : true},
    details :[{director : String, release : String, description : String}]

})
module.exports = mongoose.model('Movie', movieSchema)
