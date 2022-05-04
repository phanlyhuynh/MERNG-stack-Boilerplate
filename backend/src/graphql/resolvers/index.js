const userResolver = require('./user.resolver');
const authResolver = require('./auth.resolver');

const rootResolver = {
    users: userResolver.getUsers,
    login: authResolver.login
}

module.exports = rootResolver;
