const fs = require('fs')

function cloneFilePromise(pathToClone, destFile) {
    return new Promise((resolve, reject) => {
        fs.copyFile(pathToClone, destFile, (error) => {
            if (error) {
                reject(error)
                return
            }
            resolve(`The file '${pathToClone}' copied successfull to ${destFile}`)
        })
    })
}

async function copyAFile() {
    const fileCopied = await cloneFilePromise('test.js', 'test2.js')
    return fileCopied
}

copyAFile()
    .then(result => {
        console.log(result)
    })
    .catch(error => console.error('Error: ', error))