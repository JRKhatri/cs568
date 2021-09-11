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