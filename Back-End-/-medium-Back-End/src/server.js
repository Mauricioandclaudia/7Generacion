const express = require('express') // creando la variable

const postRouster = require('./routes/posts') // creando la variable y la ruta

// creando la vatiable y la ruta para acceder (yo lo llame mdm en ves de auth)

const app = express() // igual aqui enves de app como es una variable yo le puse api

app.use(express.json())

app.use('/posts', postRouster) // api.use('/mdm', mdmRouter)
module.exports = app
