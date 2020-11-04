const Usuario = require("../models/Usuario")


exports.crearUsuario = async (req, res) => {


    try {
        let usuario
        usuario = new Usuario(req.body)
        await usuario.save()
        res.send('usuario creado correctamente')
    } catch (error) {
        console.log(error)
        res.status(400).send('hubo un error')
    }




    console.log(req.body)
}