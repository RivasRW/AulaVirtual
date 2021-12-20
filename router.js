// Declaración de variables de condición inicial
const express = require('express')
const router = express.Router()
const userController = require('./controllers/usersController')

router.get('/', userController.login)

router.post('/home', userController.home)




module.exports = router
