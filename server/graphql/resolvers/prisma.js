const { prisma } = require('../../prisma/generated/prisma-client');

module.exports = {
  Mutation: {
    createPost: async (_, args, ctx) => {
      return prisma.createPost(args);
    }
  },
  Query: {
    hello: () => 'Hello World!',
    getPost: async (_, args, ctx) => {
      return prisma.post({ id });
    },
    getPosts: async (_, args, ctx) => {
      return prisma.posts();
    },
  },
  Post: {
    comments: async (_, args, ctx) => {
      // return prisma.comments();
      return [];
    }
  }
};
