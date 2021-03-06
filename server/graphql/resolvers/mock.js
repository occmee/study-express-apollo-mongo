module.exports = {
  Query: {
    hello: () => 'Hello World!',
    getPost: (_, args, ctx) => {
      const { id } = args;
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
    getPosts: (_, args, ctx) => {
      return [
        {
          id: 1,
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
        },
        {
          id: 2,
          title: 'fff',
          content: 'ggg',
          comments: [
            {
              id: 4,
              content: 'hhh',
            },
            {
              id: 5,
              content: 'iii',
            },
            {
              id: 6,
              content: 'jjj',
            },
          ],
        },
        {
          id: 3,
          title: 'kkk',
          content: 'lll',
          comments: [
            {
              id: 7,
              content: 'mmm',
            },
            {
              id: 8,
              content: 'nnn',
            },
            {
              id: 9,
              content: 'ooo',
            },
          ],
        },
      ];
    },
  },
};
