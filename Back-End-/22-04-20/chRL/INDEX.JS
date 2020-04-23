const fs = require('fs')
const express = require('express')

const kodemia = JSON.parse(fs.readFileSync('kodemia.json'))

const server = express()
server.use(express.json()) // middleware

// endpoints: la combinacion de un metodo y una ruta
// metodo: metodos HTTP - GET, POST, DELETE, PUT, PATCH
// ruta: strings que denotan recursos en nuestro servidor
server.get('/', (request, response) => {
    response.json({
        message: 'My first API is running'
    })
})

server.get('/koders', (req, res) => {
    res.json({
        message: 'All the koders',
        data: {
            koders: kodemia.koders
        }
    })
})

server.post('/koders', (request, response) => {
    const newKoder = {
        name: request.body.name,
        generation: request.body.generation
    }

    kodemia.koders.push(newKoder)

    response.json({
        message: 'new koder added',
        data: {
            koder: newKoder
        }
    })

})

server.listen(8081, () => {
    console.log('Server is running')
})