const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')

router.post('/userRegister', userController.userRegister);
router.post('/userLogin', userController.userLogin)

module.exports = router;