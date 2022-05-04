const userType = require('./user.type');
const queryType = require('./query.type');
const authType = require('./auth.type');

const rootTypes = `
    ${userType}
    ${queryType}
    ${authType}
`;

module.exports = rootTypes;
