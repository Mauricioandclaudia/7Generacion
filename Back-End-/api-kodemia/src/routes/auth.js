const express = require('express')

const koders = require('../usecases/koders')

const router = express.Router()

router.post('/login', async (request, response) => {
  try {
    const { email, password } = request.body
    // console.log('cred: ', email, password)
    const token = await koders.login(email, password)
    // console.log('token: ', token)
    response.json({
      success: true,
      message: 'loged in',
      data: {
        token
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
