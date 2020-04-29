const express = require('express')
const koders = require('../usescases/koders')

const router = express.Router()
router.get('/', async(request, response) => {
    const allKoders = await koders.getAll()
    response.json({
        message: 'All koders',
        data: {
            koders: allKoders
        }
    })
})

router.post('/', async(request, response) => {
    const newKoder = request.body
    const koderCreated = await koders.create(newKoder)

    response.json({
        message: 'new Koder added',
        data: {
            koder: koderCreated
        }
    })
})



router.post('/', async(request, response) => {
    try {

        const newKoder = await koders.create(request, response)
        response.json({
            message: 'koder created',
            data: {
                koder: newKoder
            }
        })


    } catch (error) {
        response.json({
            success: false,
            error: error.message
        })
        response.json({
            access: false,
            error: error.message,
            error: error.errors,
            errorArray
        })
    }
})


router.delete('/:id', (request, response) => {
    try {
        const { id } = request.params
        const koderDeleted = koders.deleteById(id)
        response.json({
            success: true,
            message: `koder with id ${id} deleted`,
            data: {
                koder: koderDeleted
            }
        })

    } catch (error) {
        {
            console.log('error: ', error)
            response.status(400)
            response.json({
                success: false,
                error: error.message
            })
        }

    }
})

router.patch('/:id')

module.exports = router

//try-catch












/**
const express = require(express)


const kodersRoutes = require('../usecases/koders')

const router = express.Rauter()



router.get('/', (Request, response) => {
    const allKoders = await koders.getAll()
    response.json({
        message('All koders',
            data: {
                koderss: allKoders
            })
    })
})

module.exports = router

 */