const jwt = require('jsonwebtoken')

const secret = 'supercretword'

function sign (payload = {}) {
  return jwt.sign(payload, secret)
}

function verify (token = '') {
  return jwt.varify(token, secret)
}

module.exports = {
  ...jwt,
  sign,
  verify
}
