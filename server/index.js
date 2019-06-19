const express = require('express');
const { ApolloServer } = require('apollo-server-express');

require('dotenv').config();

// GraphQL スキーマは共通
const scalars = require('./graphql/scalar');
const types = require('./graphql/type');
const typeDefs = { ...scalars, ...types };

// DB 実装ごとに resolver の処理を変える
const dbType = process.env.DB_TYPE || 'mock';
const resolvers = require(`./graphql/resolvers/${dbType}`);

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
