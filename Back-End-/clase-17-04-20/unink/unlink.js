const fs = require('fs')

function unlinkFilePromise(pathToDeleteAll) {
    return new Promise((resolve, reject) => {
        fs.unlink(pathToDeleteAll, (error) => {
            if (error) {
                reject(error)
            }
            resolve(`The file '${pathToDeleteAll}' deleted successfull`)
        })
    })
}

async function unlinkAFileNew() {
    const fileDeleted = await unlinkFilePromise('test.js')
    return fileDeleted
}

unlinkAFileNew()
    .then(result => {
        console.log(result)
    })
    .catch(error => console.error('Error: ', error))