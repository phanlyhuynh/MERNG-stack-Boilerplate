const userSerivce = require('../../services/user.service');
const authMiddleware = require('../../middlewares/auth.middleware');

const getUsers = (_, req, res) => {
    authMiddleware(req);

    return userSerivce.getUsers();
};

module.exports = {
    getUsers,
};
