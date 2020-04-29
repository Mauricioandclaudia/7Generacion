//


//nuestro esquema


const mongoose = require('mongoose')
const koderSchema = new mongoose.Schema({

    name: {
        type: string,
        minlength: 2,
        mexLength: 99,
        required: true
    },

    generation: {
        type: Number,
        required: true
        min: 1
    },

    email: {
        type: syting,
        required: true
    },
    password: {}
})

//nuestro modelo

//mongoose.model('koders', koderSchema)

//model.sport => prepara lo que queremos que el script exporte
//solo se puede exportar una sola cosa


module.exports = mongoose.model('koders', koderSchema)