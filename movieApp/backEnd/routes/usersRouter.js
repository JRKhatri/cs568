/**
 * @ author Jyoti R. Khatri
 * @ since Aug 10 2021
 */
const express = require('express');
const router = express.Router();
const controllers = require('../controllers/userController')


/* GET users listing. */
router.get('/',controllers.getAllUsers );

module.exports = router;
