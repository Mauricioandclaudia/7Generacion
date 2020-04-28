 const server = require('./src/server')
 const db = require('./src/lib/db')

 async function main() {
     await db.connect()
     console.log('DB connected')
     server.listen(8080, () => {
         console.log('server is running-M')
     })
 }

 main()

 .then(() => {
         console.log('server ready daddy')
     })
     .catch(error => {
         console.error('error:', error)
     })