const express = require('express')

const app = express()

//app

app.get('/', (Request, response) => {
    response.write('hola MAU!!!')
    response.end()
})

app.listen(8080, () => {
    console.log('server renning')
})


app.get('/hola', (request, response) => {

})

app.listen(8080, () => {
    console.log('server running-2')
})







/* 
const http = require('http')
const server = http.createServer((request, response) => {
    //response.write('Hola Mau')
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })
    response.write('<h1> Te damos la Bienvenida a tu nuevo Server </h1>')
    response.end()
})
server.listen(8080)



*/