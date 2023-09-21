const userController = require('../controllers/UsersController');
const express = require('express');
const router=express.Router();

router.get('/api/users',userController.getAllUsers)
router.post('/api/users',userController.createNewUser)
router.post('/api/userLogin',userController.login)






module.exports=router;