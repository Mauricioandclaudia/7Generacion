const fs = require('fs')

path = './newDirectory/newfile.txt'

pathRead = './newDirectory'

fs.write(path, 'utf8', (error) => {
    if (error) {
        conaole.log(`No se hizo el archivo '${path}' `)
    }

    fs.readdir(pathRead, (error, data) => {
        if (error) {
            console.log(`No se leyo el archivo '${pathRead}' `)
        }
        console.log('Los archivos contienen es: \n' + files)
    })

})