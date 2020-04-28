const mongoose = require('mongoose')

const host = '@cluster0-bkdmo.mongodb.net/'

const user = 'k-Mauricio'
const password = 'salmon39'
const dbName = 'kodemia'

const url = `mongodb+srv://${user}:${password}@${host}/${dbName}?retryWrites=true&w=majority`

const kodrSchema = new mongoose.Schema({

    name: {
        type: string,
        required: true,
        valueOfmaxLength: 100,
        min: 2

    },


    generation: {
        type: Number,
        required: true,
        min: 1
    },

    gender: {
        type: string,
        emun: ['m', 'f', 'n']
    }


})


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
            console.log('se conecto todo cool')
            const koders = mongoose.model('koders', kodrSchema)
                /*
                        koders.find({ generation: 7 })

                        .then(koders => {
                            console.log('koders: ', koders)
                        })

                        .catch(error => {
                            console.error('error de conection: ', error)
                        })
                    
                */



            /**
           const newkoder = new koders({ name: 'nuevo koder', generation: 7, gender: 'n' })
           newkoder.save()
           .then(() => console.log('new koder creado'))
           .catch(error => console.error('eror al crear: ', error))
        })
         */


            //koders.create({name: 'nuevo koder shortcut', generation: 7, gender: 'n'})
            //.then() => console.log('')


            .catch(error => {
                console.error('error en connect: ', error)

            })