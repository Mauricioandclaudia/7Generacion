        //
        const Koder = require('../models/koders')

        //las cosas de uso son las acciones que pueo ejercer un usuario en el sistema
        async function getAll() {
            // esto no se hace
            const allKoders = await Koder.find()
            return allKoder
        }

        async function create(koderData) {
            const koderCreated = await koder.create(koderData)

            return koderCreated

        }

        module.exports = {
                getAll,
                create
            }
            //ruta

        //const koder = require('...koders')
        //koders.getAll()