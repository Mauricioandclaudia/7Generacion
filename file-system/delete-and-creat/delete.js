const fs = require("fs");


fs.unlinkSync('creat.js', (error) => {
    if (error) {
        console.log('Hubo error al intentar borrar el archivo')
        return
    }
    fs.unlinkSync('delete-and-creat', (error) => {
        if (error) {
            console.log('borrado con exito')
            return
        }
    })
})