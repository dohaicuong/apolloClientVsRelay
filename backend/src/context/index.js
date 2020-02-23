const { prisma } = require('./generated/prisma-client')
const crypto = require('./crypto')

module.exports = async ({ req, res, connection }) => {
  const userId = await getUserId(req.headers)
  const user = userId ? await prisma.user({ id: userId }) : null

  return {
    prisma,
    crypto,
    user
  }
}

const getUserId = async headers => {
  if(!headers.authorization) return null

  const token = headers.authorization.replace('Bearer ', '')
  const decoded = await crypto.verify(token)
    .catch(err => console.log(err))
  if(!decoded) return null

  return decoded.sub
}