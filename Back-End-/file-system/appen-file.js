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

async function fs = require() {
    const path = await path('aqui una pequeña linea')
    const data = await data('aqui una pequeña linea2')

    fs.appendFile(path, data, 'utf8', (error) => {
        if (error) {
            console.log
        }
    })


}




async function principal() {
    const llamadaFinalizada = await llamadaPromificada(koder)
    console.log('llamadaFinalizada: ', llamadaFinalizada)

    const entrevistaFinalizada = await entrevistaPromificada(llamadaFinalizada)
    console.log('entrevistaFinalizada: ', entrevistaFinalizada)

    const apartadoFinalizado = await apartadoPromificada(entrevistaFinalizada)
    console.log('apartadoFinalizado: ', apartadoFinalizado)

    const primeraClase = await primeraClasePromificada(apartadoFinalizado)
    console.log('primeraClase: ', primeraClase)
    return primeraClase
}


principal()
    .then(resultado => {
        console.log('resultado: ', resultado)
        console.log('FIN PAPÍ')
    })
    .catch(error => console.log('ERROR #$&%$: ', error))