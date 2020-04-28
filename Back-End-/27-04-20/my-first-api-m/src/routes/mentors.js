const express = require('express')
const mentors = require('../usescases/mentors')

const router = express.Router()
router.get('/', async(request, response) => {
    const allMentors = await mentors.getAllMentors()
    response.json({
        message: 'All Mentors',
        data: {
            mentors: allMentors
        }
    })
})

router.post('/', async(request, response) => {
    const newMentor = request.body
    const mentorCreated = await mentors.createMentors(newMentor)
    response.json({
        message: 'New mentor',
        data: {
            mentor: mentorCreated
        }
    })
})

module.exports = router