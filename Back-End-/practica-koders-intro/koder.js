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