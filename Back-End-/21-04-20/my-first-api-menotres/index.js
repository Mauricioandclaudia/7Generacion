const express = require('express')

const server = express()

const fs = require('fs')


const kodemia = JSON.parse(fs.readFileSync('kodemia.json'))
server.use(express.json())



server.get('/', (request, response) => {
    response.json({
        message: 'My first API is runing'
    })
})


server.get('/Koders', (request, response) => {
        response.json({
            message: 'All the koders',
            data: {
                koders: kodemia.koders
            }
        })
    })
    //--------------------------------------------//
server.post('/koders', (request, response) => {
    const newKoder = {
        name: request.body.name,
        generation: request.body.generation
    }

    kodemia.koders.push(newKoder)

    response.json({
        message: 'New koder added',
        data: {
            koder: newKoder
        }
    })
})


//------------------------------------------------------//
server.get('/mentors', (request, response) => {
    response.json({
        message: 'List of  mentors',
        data: {
            koders: kodemia.mentors
        }
    })
})

server.post('/mentors', (request, response) => {
        const newMentor = {
            name: request.body.name,
            type: request.body.type
        }

        kodemia.mentors.push(newMentor)

        response.json({
            message: 'New mentor ',
            data: {
                mentor: newMentor
            }
        })
    })
    //----------------------------------------------//
server.listen(8081, () => {
    console.log('Server is running')
})