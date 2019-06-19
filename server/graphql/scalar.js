const { GraphQLScalarType, Kind } = require('graphql');

module.exports = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new global.Date(value);
    },
    serialize(value) {
      if (value instanceof global.Date) return value.getTime();
      if (value) return new global.Date(value).getTime();
      return null;
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10);
      }
      return null;
    },
  })
};
