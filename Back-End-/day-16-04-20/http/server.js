const http = require('http')

const server = http.createServer((request, response) => {
    response.writeHead(404, {
        'Content.Type': 'txt/html'
    })
    console.log('METHOD: ', request.method)
    console.log('URL: ', request.url)

    if (request.url == '/hola') {
        response.write('<h1>Hola mundo desde node http</h1>')
    }

    if (request.url == '/adios') {
        response.write('adios desde node')
    }
    response.end()
})

server.listen(8080)