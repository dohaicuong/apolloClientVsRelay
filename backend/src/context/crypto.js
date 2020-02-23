const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { JWT_SECRET } = require('../configs')

module.exports = {
  hash: password => bcrypt.hash(password, 10),
  compare: (password, hash) => bcrypt.compare(password, hash),
  sign: (payload, options = {}) => new Promise((resolve, reject) => {
    jwt.sign(payload, JWT_SECRET, options, (err, token) => {
      if(err) reject(err)

      resolve(token)
    })
  }),
  verify: token => new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if(err) reject(err)

      resolve(decoded)
    })
  }),
}