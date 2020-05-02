const mongoose = require('mongoose')

const schemaPost = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 10
  },
  author: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['salud', 'development', 'tecnologia'],
    required: true
  },
  imagen: {
    type: String,
    required: true
  },
  estimated_time: {
    type: String,
    required: true
  },
  publication_date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true,
    minlength: 30
  }
})

module.exports = mongoose.model('posts', schemaPost)
