const { gql } = require('apollo-server')

module.exports = gql`
  scalar DateTime

  type Query {
    me: User

    postsConnection(
      where: PostWhereInput
      orderBy: PostOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): PostConnection!
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

    posts(
      where: UserPostsWhere
    ): [Post!]

    createdAt: DateTime
  }

  input UserPostsWhere {
    title_contains: String
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


  type PostConnection {
    pageInfo: PageInfo!
    edges: [PostEdge]!
    aggregate: AggregatePost!
  }
  input PostWhereInput {
    AND: [PostWhereInput!]
    OR: [PostWhereInput!]
    NOT: [PostWhereInput!]
    id: ID
    title: String
    title_in: [String!]
    title_contains: String
    title_starts_with: String
    title_not_starts_with: String
    title_ends_with: String
    title_not_ends_with: String
  }
  enum PostOrderByInput {
    id_ASC
    id_DESC
    title_ASC
    title_DESC
    description_ASC
    description_DESC
    body_ASC
    body_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
  }
  type AggregatePost {
    totalCount: Int!
  }
  type PostEdge {
    node: Post!
    cursor: String!
  }
`
