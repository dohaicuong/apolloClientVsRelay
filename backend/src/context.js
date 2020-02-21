const { prisma } = require('./generated/prisma-client')

module.exports = async req => {

  return {
    ...req,
    prisma
  }
}