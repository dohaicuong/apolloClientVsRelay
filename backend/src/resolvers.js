module.exports = {
  Query: {
    me: (_, __, { user }) => user,
    postsConnection: async (_, args, { prisma }) => {
      return prisma.postsConnection(args)
    }
  },
  Mutation: {
    signup: async (_, { input: { email, password, ...input }}, { prisma, crypto }) => {
      const isExisted = await prisma.$exists.user({ email })
      if(isExisted) throw new Error('Email existed')

      const hash = await crypto.hash(password)
        .catch(err => console.log(err))
      if(!hash) throw new Error('System error try again')

      const user = await prisma.createUser({
        email,
        password: hash,
        ...input
      })

      const token = await crypto.sign({ sub: user.id })

      return {
        token,
        user
      }
    },
    login: async (_, { input: { email, password }}, { prisma, crypto }) => {
      const user = await prisma.user({ email })
      if (!user) throw new Error('Credential incorrect')

      const isMatch = crypto.compare(password, user.password)
      if (!isMatch) throw new Error('Credential incorrect')

      const token = await crypto.sign({ sub: user.id })

      return {
        token,
        user
      }
    },
  },
  User: {
    posts: async (user, args, { prisma }) => {
      const posts = await prisma.user({ id: user.id }).posts({ ...args })

      return posts.length ? posts: null
    }
  },
  PostConnection: {
    aggregate: async (_, __, { prisma }) => {
      const aggregate = await prisma.postsConnection().aggregate()
      return {
        totalCount: aggregate.count
      }
    }
  }
}