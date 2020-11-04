const express = require('express')
const conectarDB = require('./config/db')


//crear el servidor
const app = express()


//coarco la base de datos
conectarDB()


// habilitar express.json
app.use(express.json({ extended: true }))




//puerto de la app
const PORT = process.env.PORT || 4000

//importar rutas
app.use('/api/usuarios', require('./routes/usuarios'))

//definir la pg principal


//arrancar la app
app.listen(PORT, () => {
    console.log(`desde el servidor por  puerto ${PORT}`)
})
