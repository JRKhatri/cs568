/**
 * @ author Jyoti R. Khatri
 * @ since Aug 10 2021
 */
const express = require('express');
const router = express.Router();
const controllers = require('../controllers/userController')


/* GET users listing. */
router.get('/',controllers.getAllUsers );
router.get('/:uId', controllers.getUserById) 
router.post('/', controllers.addUser)
router.put('/:uId', controllers.updateUser)
router.delete('/:uId', controllers.deleteUser)
 

module.exports = router;
