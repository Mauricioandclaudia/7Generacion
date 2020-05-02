const mongoose = require('mongoose')

function connect () {
  return mongoose.connect('mongodb+srv://k-Mauricio:salmon39@cluster0-bkdmo.mongodb.net/medium?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
}

module.exports = { connect }
