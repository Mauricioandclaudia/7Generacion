const mongoose = require('mongoose')
const DB_USER = 'k-Mauricio'
const DB_PASSWORD = 'salmon39'
const DB_HOST = '@cluster0-bkdmo.mongodb.net/'
const DB_NAME = 'kodemia'
const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

//------------------------------
function connect() {
    // mongoose.connect() retorna una promesa
    return mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
}

//------------------------------

module.exports = {
    connect
}

// del otro lado
// const connectDb = require('...bd.js')
// connectDb() -> asi se exportamos directamente la function
// const db = require('...bd.js')
// db.connect() -> si lo exportamos como un objeto

// module.exports = () => {

// }