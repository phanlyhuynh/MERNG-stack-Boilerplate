const authMutation = require('./auth.mutation');

const rootMutation = `
    type Mutation {
        ${authMutation}
    }
`;

module.exports = rootMutation;
