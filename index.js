const express = require('express')

// craer una app de express
const app = express();

// ruta para el home
app.use('/', (req, res) => {
    res.send('Hola');
})

//conectar a un puerto -> el qu sea
app.listen(3000);