const Mentor = require('../models/mentors')

async function getAllMentors() {
    const allMentors = await Mentor.find({})
    return allMentors
}

async function createMentors(mentorData) {
    const mentorCreated = await Mentor.create(mentorData)
    return mentorCreated
}
module.exports = {
    getAllMentors,
    createMentors
}