const { gql } = require('apollo-server')

module.exports = gql`
  scalar DateTime

  type Query {
    me: User
  }

  type Mutation {
    signup(input: UserSignupInput!): AuthPayload!
    login(input: UserLoginInput!): AuthPayload!
  }

  input UserSignupInput {
    name: String!
    email: String!
    password: String!
  }
  input UserLoginInput {
    email: String!
    password: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }
  type User {
    id: ID!

    email: String!
    name: String!

    posts: [Post!]

    createdAt: DateTime
  }

  type Post {
    id: ID!

    author: User!

    title: String!
    description: String
    body: String

    createdAt: DateTime
    updatedAt: DateTime
  }
`
