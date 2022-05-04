const authService = require('../../services/auth.service');

const login = async ({ username, password }) => {
    return await authService.login(username, password);
};

module.exports = {
    login,
};
