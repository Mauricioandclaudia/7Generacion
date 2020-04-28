const express = require('express') //mandamos a llamar a express con una constante

const server = express() //en esta linea estamos creando una nueva aplicacion en express



//----------ha estos se les llama ENPOINTS: la combinacion de un metodo y una ruta----------//
//-----------los metodo: metoodos HTTP SON: -get,post,delete,put patch-------//
//-----------las ruta: strings que denotan recursos en nuestro servidor------//

server.get('/', (request, response) => { //el REQUEST es el objeto que nos manda el cliente y 
        // el RESPONSE es es la respuesta del cliente
        response.json({

            message: 'My first api is running papi'

        })

    }) //quiero que este server me responda en un llamada GET a la raiz
    //  (tiene dos paramentros de cajon que son: 1.-'/'  2.-)
    // tambien recibe un callback    () => {}



//como hago algo con este servidor ?????

server.listen(8080, () => {
        console.log('server is running')
    }) //el 8080 es el primer paramentro de listen, falta otro que es :
    //callback que se ejecuta cuando termina de levantar  el servidor del puerto  
    //le vamos a decir al servidor donde va a escuchar y esto sera en el puerto 8080