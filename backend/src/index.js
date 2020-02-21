const { ApolloServer } = require('apollo-server')

const { SERVICE_PORT } = require('./configs')

const context = require('./context')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

new ApolloServer({
  context,
  typeDefs,
  resolvers
})
  .listen(SERVICE_PORT)
  .then(({ url }) => console.log(url))