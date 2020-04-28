const mongoose = require('mongoose')
const mentorSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 99,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Mentor', mentorSchema)