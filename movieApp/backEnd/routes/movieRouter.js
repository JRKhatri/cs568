/**
 * @ author Jyoti R. Khatri
 * @ since Aug 10 2021
 */

const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController')
const authController = require('../controllers/authController')


/* GET home page. */
router.get('/', movieController.getAllMovies);
router.get('/:mId', movieController.findMovieById)
router.post('/',authController.authorizeAdmin, movieController.addMovie)
router.put('/:mId',authController.authorizeAdmin, movieController.updateMovie)
router.delete('/:mId', authController.authorizeAdmin, movieController.deleteMovie)

module.exports = router;