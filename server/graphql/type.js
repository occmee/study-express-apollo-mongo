const { gql } = require('apollo-server-express');

module.exports = gql`
type Post {
  id: ID
  title: String
  content: String
  comments: [Comment]
  # createdAt: Date
  # updatedAt: Date
}

type Comment {
  id: ID
  content: String
  # createdAt: Date
  # updatedAt: Date
}

input PostCreateInput {
  title: String!
  content: String!
}
input PostUpdateInput {
  id: ID!
  title: String
  content: String
}
input PostDeleteInput {
  id: ID!
}

input CommentCreateInput {
  postId: ID!
  content: String!
}
input CommentUpdateInput {
  id: ID!
  content: String
}
input CommentDeleteInput {
  id: ID!
}


type Query {
  hello: String

  getPost(id: ID): Post
  getPosts: [Post]
}

type Mutation {
  createPost(input: PostCreateInput): Post
  updatePost(input: PostUpdateInput): Post
  deletePost(input: PostDeleteInput): Post
  createComment(input: CommentCreateInput): Comment
  updateComment(input: CommentUpdateInput): Comment
  deleteComment(input: CommentDeleteInput): Comment
}
`;
