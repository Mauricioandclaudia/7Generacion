const fs = require('fs')
const express = require('express')

const kodemia = JSON.parse(fs.readFileSync('kodemia.json'))

const server = express()
server.use(express.json()) //Middleware

//endpoints: la combinación de un método y una ruta
// método: Métoos HTTP, GET, POST, DELETE, PUT, PATCH
// ruta: strings que denotan recursos en nuestro servidor.

server.get('/', (request, response) => {
    response.json({
        message: 'My first API is running'
    })
})

//Section koders 
server.get('/koders', (request, response) => {
    response.json({
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

//Sectio a-Mentors
server.get('/amentores', (request, response) => {
    response.json({
        message: 'All the aMentores',
        data: {
            aMentors: kodemia.aMentors
        }
    })
})

server.post('/amentores', (request, response) => {
    const newMentor = {
        name: request.body.name,
        course: request.body.course,
        generation: request.body.generation
    }
    kodemia.aMentores.push(newMentores)
    response.json({
        message: 'new aMentores aded',
        data: {
            aMentor: newMentores
        }
    })

})

server.listen(8081, () => {
    console.log('Server is running')
})