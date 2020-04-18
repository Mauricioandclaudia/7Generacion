const fs = require('fs')


function writeFile(pathTpWrite, dara) {
    return new Promise((resolve, reject) => {
        fs.watchFile(pathTpWrite, data, 'utf8', (error) => {
            if (error) {
                reject(error)
                return
            }
            resolve(`el archivo '${pathTpWrite}' fue creado con exito !!!`)
        })
    })
}

async function createFile() {
    const fileToCreate = await writeFile('test.js', 'new file papi')
}

createFile()
    .then(result => {
        console.log(result)
    })
    .catch(error => console.error('Error: ', error))