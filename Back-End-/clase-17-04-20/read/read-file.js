const fs = require('fs')

function readFilepromise(path, way) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, way, (error, data) => {
            if (error) {
                reject(error)
                return
            }
            resolve(data)
        })

    })
}

async function newReadFile() {
    const data = await readFilepromise('./carpeta-de-prueba/textoDePrueba.txt', 'utf8')
    return data
}
newReadFile()
    .then(data => {
        console.log('El archivo contiene esto', data)
    })
    .catch(error => console.error('Error', error))