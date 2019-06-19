const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  content: String,
  comments: [{
    type: Schema.Types.ObjectId, 
    ref: 'Comment',
  }],
  createdAt: Date,
  updatedAt: { type: Date, default: Date.now },
});

const CommentSchema = new Schema({
  _id: Schema.Types.ObjectId,
  content: String,
  createdAt: Date,
  updatedAt: Date,
});

const Post = mongoose.model('post', PostSchema);
const Comment = mongoose.model('comment', CommentSchema);

module.exports = {
  Post,
  Comment
};
