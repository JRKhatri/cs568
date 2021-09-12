/**
 * @ author Jyoti R. Khatri
 * @ since Aug 10 2021
 */
const MovieCollection = require('../models/movie')

exports.getAllMovies = async (req, res, next) => {
    try {
        const allMovies = await MovieCollection.find();
        res.status(200).json(allMovies);

    } catch (error){
        next(error)
    }
}
exports.findMovieById = async (req, res, next) =>{
    try{
    const movie = await MovieCollection.findOne({movieId : req.params.mId})
    res.status(200).json(movie)
}catch(error){
    next(error)
}
}


exports.addMovie = async (req, res, next) => {
   try{ 
    const body = req.body;
    const savedMovie = await MovieCollection(body).save();
    console.log(savedMovie)
    res.status(201).json(savedMovie)
   
   }catch(error){
    res.json({Error :'Error : Mission informatio, Please try again!'})
    next(error)
   }
}

exports.updateMovie = async(req, res, next) => {
    console.log("*************************")
    try{
        const body = req.body;
        console.log(body)
        const updatedMovie = await MovieCollection.updateOne({movieId:Number(req.params.mId)},{$set:body});
        console.log(updatedMovie)
        res.status(200).json(updatedMovie)

    }catch(error){
        next(error)
    }

}
exports.deleteMovie = async (req, res,next) =>{
    try{
    const deletedMovie = await MovieCollection.deleteOne({movieId: req.params.mId})
    res.status(200).json(deletedMovie)

}catch(error){
    next(error)
}
}
