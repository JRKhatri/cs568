/**
 * @ author Jyoti R. Khatri
 * @ since Aug 10 2021
 */

const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController')


/* GET home page. */
router.get('/', movieController.getAllMovies);

module.exports = router;