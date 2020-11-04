//rutas para crear usuarios
const express = require('express')
const router = express.Router()
const usuarioControllers = require('../controllers/usuarioControllers')


//crear usuario 
// api/usuarios
router.post('/',
    usuarioControllers.crearUsuario
)

module.exports = router