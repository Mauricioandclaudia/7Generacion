const fs = require('fs')


fs.writeFile('write.text', 'Hola desde node', 'utf8', (error) => {
    if (error) {
        console.log('Hubo un error al escribir el archivo')
        return
    }
    console.log('termine de escribir el archivo')
})



fs.readFile('write.txt', 'utf8', (error, data) => {
    if (error) {
        console.log('hubo error en el archivo')
        return

    }
    console.log(data);
})