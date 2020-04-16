const fs = require('fi')

fs.copyFile('write.txt', 'copia.txt', (error) => {
    if (error) {
        console.log('fallo la copia del archivo', error)
        return
    }
    console.log('El archivo fue copiado con exito')
    fs.readFile('copia.txt', 'utf8', (err, data) => {
        if (err) {
            console.log('Hubo un error chaval al leer el archivo')
            return
        }
        console.log(data)
    })
})