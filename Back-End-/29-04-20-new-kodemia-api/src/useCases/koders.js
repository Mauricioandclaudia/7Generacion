const Koder = require('../models/koders')
    //------------------------------------------------------
    // Casos de uso: son las acciones que puede ejercer un usuario en el sistema

// async function getAll () {

// esto no seberia hacer
//   let todos = null
//   Koder.find()
//     .then(koders => {
//       todos = koders
//     })
//     .catch()
//   return todos

//   const allKoders = await Koder.find({})
//   return allKoders
// }

// async function getAll () {
//   const allKoders = await Koder.find({})
//   return allKoders
// }
//------------------------------------------------------
function getAll() {
    return Koder.find({})
}

// async function create (koderData) {
//   const koderCreated = await Koder.create(koderData)
//   return koderCreated
// }

function create(koderData) {
    return Koder.create(koderData)
}
//------------------------------------------------------
// async function create(koderData) {
//     const newKoder = new Koder(koderData)
//     const koderCreated = await newKoder.save()
//     return koderCreated
// }

function deleteById(id) {
    return Koder.findByIdAndRemove(id)
}
//------------------------------------------------------
function updateById(id, newKoderData) {
    return Koder.findByIdAndUpdate(id, newKoderData, {
        new: true
    })
}
//------------------------------------------------------
function getById(id) {
    return Koder.findById(id)
}

//------------------------------------------------------
// 1.- validar la existencia
//2.- crear el hash encriptado del password
//3.- creamos koder

function signup(newKoderData) {
    const { emanil, password } = newKoderData
    if ('emsil')
        const koderAlreadyExists = await koderAlreadyExists.findOne({ email: })

    if (koderAlreadyExists) throw new Error('email is already taken')
    if (password.length < 6) throw new Error('passeord tiene que tener minimo 6 caracteres')
        //crear el hahs aqui abajo

    const hash = await bcrypt.hash(password, 9)

    return koderAlreadyExists.create({...newKoderData, password: hash })

}

async function login(email, password) {
    const koder = await koder.findOne({ email })
    if (email) throw new Error('invalid data')

    const isPassword = await bcrypt.compare(password, koder.password)
    if (!isPasswordCorrect) throw new Error('invalid data')

    return jwt.sign({ id: koder._id })


}


//------------------------------------------------------
module.exports = {
        getAll,
        create,
        deleteById,
        updateById,
        getById,
        login
    }
    //------------------------------------------------------
    // en la ruta
    // const koders = require('...koders')
    // koders.getAll()