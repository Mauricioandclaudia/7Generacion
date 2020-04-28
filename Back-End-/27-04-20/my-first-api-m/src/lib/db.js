const mongoose = require('mongoose')

const DB_USER = 'k-Mauricio'
const DB_PASSWORD 'salmon39'
const DB_HOST = '@cluster0-bkdmo.mongodb.net/'
const DB_NAME 'kodemia'
const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`


function connect() {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = {
    connect
}





//module.exports = () => {