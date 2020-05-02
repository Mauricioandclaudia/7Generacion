const express = require('express')
// const koders = require('./usescases/koders')
const kodersRouter = require('./routes/koders')
const authRouter = require('./routes/auth')
// const authMiddleware = require('./middlewres/auth')
const app = express()

app.use(express.json())

app.use((request, response, next) => {
  console.log(`> [${request.method}] ${request.url} body: ${JSON.stringify(request.body)}`)
  console.log('> middleware in app')
  next()
})

// app.use(authMiddleware)

app.use('/koders', kodersRouter)
app.use('/auth', authRouter)
// todos los recursos se escriben en plural
/*
                            app.get('/koders', async (request, response) => {
                              const allKoders = await koders.getAll()
                              response.json({
                                message: ' All koders',
                                data: {
                                  koders: allKoders
                                }
                              })
                            }) */
// nos sirve para montar nuestro router
// app.use(express.json())
// app.use('/auth', authRouter)
// montamos router en koders

module.exports = app
