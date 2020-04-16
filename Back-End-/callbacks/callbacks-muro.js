//construir la pared
//aplanar la pared
//pintar l apared


const muro = {
    estaConstruido: false,
    estaAplanado: false,
    estaPintado: false
}

/*
function construir (muroAConstruir) {
    muroAConstruir.estaConstruido = true
    return muroAConstruir
}
function aplanar (muroAAplanar) {
    muroAAplanar.estaAplanado = true
    return muroAAplanar
}
function pintar (muroAPintar) {
    muroAPintar.estaPintado = true
    return muroAPintar
}
const muroConstruido = construir(muro)
const muroAplanado = aplanar(muroConstruido)
const muroPintado = pintar(muroAplanado) 
*/

//declaracion de una funcion
//function construir () {
//  ...comportamiento    
//}

// Uso o llamada de la funcion
//construir()
//
//


function construir(muroAConstruir, callback) {
    setTimeout(() => {
        let error = null
        muroAConstruir.estaConstruido = true
        if (muroAConstruir.estaConstruido === false) {
            error = 'No se pudo construir el muro'
        }
        callback(error, muroAConstruir)
    }, 3000)

}

function aplanar(muroAAplanar, callback) {
    setTimeout(() => {
        muroAAplanar.estaAplanado = true
        let error = muroAAplanar.estaAplanado ?
            null :
            'no se pudo aplanar'
        callback(error, muroAAplanar)
    }, 3000)
}

function pintar(muroAPintar, callback) {
    setTimeout(() => {
        muroAPintar.estaPintado = true
        let error = muroAPintar.estaPintado ?
            null :
            'no se pudo pintar'
        callback(error, muroAPintar)
    }, 3000)
}


construir(muro, (errorDeConstruccion, muroConstruido) => {
    if (errorDeConstruccion) {
        console.error('errorDeConstruccion: ', errorDeConstruccion)
        return
    }
    aplanar(muroConstruido, (errorDeAplanado, muroAplanado) => {
        if (errorDeAplanado) {
            console.error('errorDeAplanado: ', errorDeAplanado)
            return
        }
        pintar(muroAplanado, (errorDePintado, muroPintado) => {
            if (errorDePintado) {
                console.error('errorDePintado: ', errorDePintado)
                return
            }
            console.log('muroPintado: ', muroPintado)
        })
    })
})

console.log('muro: ', muro)












/* 

const muro = {
    estaConstruido: false,
    estaAplanado: false,
    estaPintado: false

}

function construir(muroAConstruir, callback) {
    setTimeout(() => {
        let error = null
        muroAConstruir.estaConstruido = true
        if (muroAConstruir.estaConstruido == false) {
            error = 'no se pudo construir el muro'
        }
        callback(error, muroAConstruir)

    }, 3000)

}

function aplanar(muroAAPlanar, callback) {
    setTimeout(() => {
        muroAAPlanar.estaPintado = true
        let error = muroAAPlanar.estaPintado ?
            null!'no se pudo aplanar'
        callback(error, muroAAPlanar)
    }, 3000)
}

function pintar(muroAAPintar, callback) {
    setTimeout(() => {
        muroAAPintar.estaPintado = true
        let error = muroAPintar.estaPintado ?
            null!'no se pudo pintar'
        callback(error, muroAAPintar)
    }, 3000)
}



construir(muro, (errorDeConstruccion, muroConstruido) => {
    if (errorDeConstruccion) {
        console.error('errorDeContruccion: ', errorDeConstruccion)
        return
    }

    aplanar(muroConstruido, (errorDeAplanado, muroAplanado) => {
        console.log('---errorDeAplanado: ', errorDeConstruccion)
        if (errorDeAplanado) {
            console.error('errorDeAplanado: ', errorDeAplanado)
            return
        }

        pintar(muroAplanado, (errorDePintado, muroPintado) => {
            if (errorDePintado) {
                console.error('errorDePintado, ', errorDeAplanado)
                return
            }
            console.log('muroPintado: ', muroPintado)
        })
    })


})


console.log('muro: ', muro)


*/




/*
primera parte y es lo mas cencilla, en el ejemplo de arriba vamos hacer fnciones 
function construir(muroAConstruir) {
    muroAConstruir.estaConstruido = true

    return muroAConstruir
}

function aplanar(muroAAplanado) {
    muroAAplanado.estaAplanado = true

    return muroAAplanado
}

function pintar(muroAPintar) {
    muroAPintar.estaPintado = true

    return muroAPintar
}

construir(muro)
aplanar(muro)
pintar(muro)

console.log('muro', muro)

*/