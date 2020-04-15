// const colors = require("colors")

// const name = "mauricio"

// console.log(name.red(name))

const colors = require('colors/safe')

const moment = require('moment')

const name = 'Mau'

const date = moment().format('LT')

console.log(colors.rainbow(`hola ${name}, son las ${date}`))
