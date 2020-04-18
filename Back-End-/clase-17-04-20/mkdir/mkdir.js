const fs = require('fs')

function mkdirPromise(pathToCreate) {
    return new Promise((resolve, reject) => {
        fs.mkdir(pathToCread, (error) => {
            if (error) {
                reject(error)
                return
            }
            resolve(`The directory '${pathToCread}' created successfull`)
        })
    })
}

async function createMkdir() {
    const dirCreated = await mkdirPromise('newDirectory')
    return dirCreated
}

createMkdir()
    .then(result => {
        console.log(result)
    })
    .catch(error => console.error('Error: ', error))