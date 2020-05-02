// aqui se va a lanzar el servidor  y la tenemos que importar

const app = require('./src/server') // creando y accediendo a la carpeta src y al archivo server

const db = require('./src/lib/db') // creando y entrando a las carpetas y archivo
// const db = require('./')

async function main () { // debe de ser asincrona
  await db.connect()
  console.log('-DB Connect-')
  app.listen(8080, () => { // una ves conectadp sigue con esto
    console.log('your servers ir running')
  })
}

main()
  .then(() => console.log('your server is running '))
  .catch(error => console.log('error: ', error))

module.exports = app
