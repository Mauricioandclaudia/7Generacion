const express = require('express')
const koders = require('../usecases/koders')
const router = express.Router()

// middlesware
router.use((request, response, next) => {

})

// router que se montara en /koders
// peticion GET /koders

router.get('/',
  (request, response, next) => {
    console.log('middleware en GET /koders')

    next()
  }, async (request, response) => {
    try {
      const allKoders = await koders.getAll()
      response.json({
        message: 'All koders',
        data: {
          koders: allKoders
        }
      })
    } catch (error) {
      response.status(400)
      response.json({
        success: false,
        error: error.message
      })
    }
  })
// Peticion POST para /koders con try & catch
router.post('/', auth, async (request, response) => {
  try {
    const newKoder = await koders.create(request.body)
    response.json({
      success: true,
      message: 'New koder was created',
      data: {
        koder: newKoder
      }
    })
  } catch (error) {
    const errorArray = Object.entries(error.errors)
      .map(([key, value]) => {
        return {[key]: value.message }
      })

    response.status(400)
    response.json({
      success: false,
      error: error.message,
      errors: error.errors,
      errorArray
    })
  }
})

// DELETE /koders/:id
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const koderDeleted = await koders.deleteById(id)
    response.json({
      success: true,
      message: `Koder with id ${id} was deleted`,
      data: {
        koder: koderDeleted
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})
// PATCH /koders/:id
router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const koderUpdated = await koders.updateById(id, request.body)
    response.json({
      success: true,
      message: `Koder with id ${id} was updated`,
      data: {
        koder: koderUpdated
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})
// sign up para registro y sign in para ingresar
router.post('/signup', async (request, response) => {
  try {
    const newKoder = await koders.signup(request.body)
    response.json({
      success: true,
      message: 'Koder was registered successfully',
      data: {
        koder: newKoder
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})
module.exports = router
