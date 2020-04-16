const fs = require('fs')

path = '-/write.txt'

data = `AQUI UNA PEQUEÑA LINEA  `

fs.appendFile(path, data, 'utf8', (error) => {
    if (error) {
        console.log('ocurrio un error chaval')
        return
    }
    console.log('se agrego el archivo')
})