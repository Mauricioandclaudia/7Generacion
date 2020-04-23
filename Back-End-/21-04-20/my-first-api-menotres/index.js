const fs = require('fs')
const express = require('express')
const server = express()
server.use(express.json()) // use, introduce el concepto de middleware, se ejecuta cada vez que recibe una función, 
    //parsea el cuerpo del paquete express ajson que es manejable

const kodemia = JSON.parse(fs.readFileSync('my-first-api/kodemia.json'))



//------------------------------------
// Endpoint, la combinación de un metodo y una ruta
// metodo: metodos HTTP - GET POST DELETE PUT PATCH
//ruta: strings que denotan recursos en nuestroservidor, unicamente representa los recursos, no archios de texto u otros
server.get('/', (request, response) => {
    response.json({
        message: 'My first API is running'
    })
})


//json automaticamente termina la conexion no es necesario el response.end
//-------------------------------------------
server.get('/koders', (req, res) => {
    //using query parameters
    const { limit = 10 } = req.query
    res.json({
        message: 'All the koders',
        data: {
            koders: kodemia.koders.slice(0, parseInt(limit))
        }
    })
})


//--------------------------------------------------
server.post('/koders', (request, response) => {
    //usando deconstruccion
    const { name, generation } = request.body

    kodemia.koders.push({
        name,
        generation
    })

    response.json({
        message: 'new koder added',
        data: {
            koder: {
                name,
                generation
            }
        }
    })

    // response.json(request.body)
    // const newKoder = {
    //     name: request.body.name,
    //     generation: request.body.generation
    // }
    // kodemia.koders.push(newKoder)

    // response.json({
    //     messagge: 'New koder add',
    //     data: {
    //         newKoder
    //     }

    // })
})



//---------------------------------------------------
// POST and GET to mentors
server.get('/mentors', (req, res) => {
    res.json({
        message: 'All the mentors',
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
        messagge: 'New mentor add',
        data: {
            newMentor
        }
    })
})

//---------------------------------------
// uri parameters
// GET /koders/[name]
// GET /koders/fer -> name = fer

server.get('/koders/:name', (request, response) => {
        response.json({
            name: request.params.name
        })
    }) // -> /koders/fer

// query parameters
// estan en una url http://servidor/ruta/del/recurso?
// GET http://api.kodemia.mx/koders?limit=66&from=10&to=100 ->fin de un parametro y comienzo de otro

// -------------------Practica---------------------
/*
Endpoint que reciba el indice de un koder y regrese el koder que se encuentra en ese indice
GET /koders/:indice _> indice = 0 ... kodemia.koders[indice]
*/


//-------------------------------------
server.get('/kodersIndex/:indice', (req, res) => {
        //using query parameters
        const { indice } = req.params
        res.json({
            message: 'The koder is...',
            data: {
                koder: kodemia.koders[indice].name
            }
        })
    })
    //----------------------------------



server.listen(8080, () => {
    console.log('Server is running')
})