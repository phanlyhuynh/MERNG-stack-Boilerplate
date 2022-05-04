const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const rootQuery = require('./types');
const rootMutation = require('./mutations');
const rootResolver = require('./resolvers');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
    ${rootQuery}
    ${rootMutation}
`);

// The root provides a resolver function for each API endpoint
var root = rootResolver;

const rootGraphql = graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
});

module.exports = rootGraphql;
