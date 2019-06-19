require('../../mongo/config');
const { Post, Comment } = require('../../mongo/models');

module.exports = {
  Mutation: {
    createPost: async (_, args, ctx) => {
      const { input } = args;
      const post = await Post.create(input).catch(err => {
        console.log(err.message);
        return null;
      })
      return post ? { id: post._id, ...post.toJSON() } : null;
    }
  },
  Query: {
    hello: () => 'Hello World!',
    getPost: async (_, args, ctx) => {
      const { id } = args;
      const posts = await Post.find({ _id: id }).exec();

      return {
        id,
        title: 'aaa',
        content: 'bbb',
        comments: [
          {
            id: 1,
            content: 'ccc',
          },
          {
            id: 2,
            content: 'ddd',
          },
          {
            id: 3,
            content: 'eee',
          },
        ],
      };
    },
    getPosts: async (_, args, ctx) => {
      const posts = await Post.find({}).exec();
      return posts.map(v => ({ id: v._id, ...v.toJSON() }));
    },
  },
  Post: {
    comments: async (_, args, ctx) => {

      return [];
    }
  }
};
