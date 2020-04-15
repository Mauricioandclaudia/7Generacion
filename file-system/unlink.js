const fs = require('fs')

fs.unlink('write.txt', (error) => {
    if (error) {
        console.log('Hubo un error chaval al eliminar el archivo', error);
        return
    }
    console.log('El archivo si fue borrado')
})