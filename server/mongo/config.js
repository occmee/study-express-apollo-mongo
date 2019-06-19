const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

require('dotenv').config();

const url = `mongodb://localhost:27017/${process.env.MONGO_DB_NAME || 'sample'}`;
const options = {
  auth: {
    user: process.env.MONGO_DB_USER || 'hoge',
    password: process.env.MONGO_DB_PASS || 'fuga',
  },
  useNewUrlParser: true,
};

// Retry connection
const connectWithRetry = () => {
  console.log('MongoDB connection with retry')
  return mongoose.connect(url, options);
}

// Exit application on error
mongoose.connection.on('error', err => {
  console.log(`MongoDB connection error: ${err}`)
  setTimeout(connectWithRetry, 3000)
})

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB at ${url}`)
})

connectWithRetry();
