const express = require('express')

const router = express.Router()

router.post('/login', (request, response) => {
    try {

        const.post('/login', (request, response) => {
            const { email, password } = request.body
            const token = await koders.login(email, password)
            response.json({
                siccess: true,
                message: 'loge in',
                data: {
                    token
                }
            })

        })
    } catch (error) {

        response.status(400)
        response.json({
            success: false,

        })
    }
})

module.exports = router