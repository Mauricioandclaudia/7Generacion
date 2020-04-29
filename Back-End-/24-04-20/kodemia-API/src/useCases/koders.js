        //
        const Koder = require('../models/koders')

        //las cosas de uso son las acciones que pueo ejercer un usuario en el sistema
        async function getAll() {
            // esto no se hace
            //const allKoders = await

            Koder.find()
            return allKoder
        }

        function create(koderData) {
            return koder.create(koderData)
        }


        //    async function create(koderData) {
        //      const koderCreated = await koder.create(koderData)
        //      const kodderCreated = await newKoder.save()
        //          return koderCreated

        //    }


        function deleteById(id) {
            return koder.findByIdAndRemove(id)
        }


        module.exports = {
                getAll,
                create
            }
            //ruta







        //const koder = require('...koders')
        //koders.getAll()