// Declaración de variables de condición inicial
const express = require('express')
const router = express.Router()
const userController = require('./controllers/usersController')

router.get('/', userController.login)

<<<<<<< HEAD
router.post('/', userController.login)
=======
router.post('/', userController.home)
>>>>>>> e95aa6e6a52e8d0449b71554854582f184cefd39




module.exports = router;
