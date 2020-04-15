const fs = require('fs')

path = 'newDirectory'

fs.mkdir(path, (error) => {
    if (error) {
        console.log(`No hiciste el directorio '${path}'`)
    }
    console.log(`Se creo el directorrio '${path}'`)
})