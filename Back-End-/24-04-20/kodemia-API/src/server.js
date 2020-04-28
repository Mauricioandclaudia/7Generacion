const express = require('express')
    // const koders = require('./usescases/koders')
const kodersRouter = require('./routes/koders')
const mentorsRouter = require('./routes/mentors')
const app = express()

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
app.use(express.json())
    // montamos router en koders
app.use('/koders', kodersRouter)
app.use('/mentors', mentorsRouter)
module.exports = app