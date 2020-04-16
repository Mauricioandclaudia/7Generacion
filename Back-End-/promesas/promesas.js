/*
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




//promificacion

funtion construirPromificada(muroAConstruir) {
        return new promise(resolve, reject) => {
            construir(muroAConstruir, (error, muroAConstruir) => {

            })
        }

        */




//cllamada
//Entrevista
//Apartado
//Primera clase



const koder = {
    proximoKoder: false,
    proximaEntrevista: false,
    proximoApartado: false,
    proximoEntradaDeClase: false

}

//------------

function llamada(llamadaEntrante, callback) {
    setTimeout(() => {
        llamadaEntrante.proximoKoder = true
        let error = llamadaEntrante ?
            null :
            'Lo sentimos fondos insuficientes'
        callback(error, llamadaEntrante)

    }, 2000)
}


function entrevista(citaYValoracion, callback) {
    setTimeout(() => {
        citaYValoracion.aceptado = true
        let error = citaYValoracion.aceptado ?
            null :
            'lo sentimos no eres apto para entrar chaval'
        callback(error, citaYValoracion)
    }, 2000)
}


function apartado(apartadoEnCurso, callback) {
    setTimeout(() => {
        apartadoEnCurso.fueAceptadoConExito = true
        let error = apartadoEnCurso.fueAceptadoConExito ?
            null :
            'No fue aceptado'
        callback(error, apartadoEnCurso)
    }, 2000)
}


function primeraClase(fechaDeClase, callback) {
    setTimeout(() => {
        fechaDeClase.entradaAClase = true
        let error = fechaDeClase.entradaAClase ?
            null :
            'no fue a la primera clases lol'
        callback(error, fechaDeClase)
    }, 2000)
}


//----------------------

llamada(koder, (errorDeLlamada, llamadaFinalizada) => {
    if (errorDeLlamada) {
        console.error('errorDeLlamada: ', errorDeLlamada)
        return
    }


    entrevista(llamadaFinalizada, (errorDeHubicacion, entrevistaFinalizada) => {
        console.log('---errorDeHubicacion: ', errorDeLlamada)
        if (errorDeHubicacion) {
            console.error('errorDeHubicacion: ', errorDeHubicacion)
            return
        }


        apartado(entrevistaFinalizada, (errorDeApartado, apartadoFinalizado) => {
            if (errorDeApartado) {
                console.error('erroreDeApartado: ', errorDeApartado)
                return
            }


            primeraClase(apartadoFinalizado, (errorDeFecha, inicioDeClase) => {
                if (errorDeFecha) {
                    console.error('errorDeFecha: ', errorDeFecha)
                    return
                }
                console.log('inicioDeClase: ', inicioDeClase)
            })
        })
    })
})


console.log('koder: ', koder)


//------------------------


//promesas

function llamadaPromificada(llamadaEntrante) {
    return new Promise((resolve, reject) => {
        llamada(llamadaEntrante, (error, llamadaFinalizada) => {
            if (error) {
                reject(error)
                return
            }
            resolve(llamadaFinalizada)
        })
    })
}


function entrevistaPromificada(citaYValoracion) {
    return new Promise((resolve, reject) => {
        llamada(citaYValoracion, (error, entrevistaFinalizada) => {
            if (error) {
                reject(error)
                return
            }
            resolve(entrevistaFinalizada)
        })
    })
}


function apartadoPromificada(apartadoEnCurso) {
    return new Promise((resolve, reject) => {
        llamada(apartadoEnCurso, (error, apartadoFinalizado) => {
            if (error) {
                reject(error)
                return
            }
            resolve(apartadoFinalizado)
        })
    })
}


function primeraClasePromificada(fechaDeClase) {
    return new Promise((resolve, reject) => {
        llamada(fechaDeClase, (error, inicioDeClase) => {
            if (error) {
                reject(error)
                return
            }
            resolve(inicioDeClase)
        })
    })
}


llamadaPromificada(koder)
    .then(llamadaFinalizada => {
        console.log('llamadaFinalizada: ', llamadaFinalizada)
        entrevistaPromificada(llamadaFinalizada)

        .then(entrevistaFinalizada => {
                console.log('entrevistaFinalizada: ', entrevistaPromificada)
                apartadoPromificada(entrevistaFinalizada)

                .then(apartadoFinalizado => {
                        console.log('apartadoFinalizado: ', apartadoFinalizado)
                        primeraClasePromificada(apartadoFinalizado)

                        .then(primeraClase => {
                            console.log('apartadoFinalizado: ', primeraClase)
                        })

                        .catch(error => console.log('Error de llamada: ', error))
                    })
                    .catch(error => console.log('Error de Entrevista: ', error))

            })
            .catch(error => console.log('Error de Apartado: ', error))
    })
    .catch(error => console.log('Error de De clase: ', error))



//async/await