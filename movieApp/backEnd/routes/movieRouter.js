/**
 * @ author Jyoti R. Khatri
 * @ since Aug 10 2021
 */

const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController')


/* GET home page. */
router.get('/', movieController.getAllMovies);
router.get('/:mId', movieController.findMovieById)
router.post('/', movieController.addMovie)
router.put('/:mId', movieController.updateMovie)
router.delete('/:mId', movieController.deleteMovie)

module.exports = router;