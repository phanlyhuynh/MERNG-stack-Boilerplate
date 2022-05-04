const debug = require('debug')('http');
const handleError = require('../utils/api.handleError');
const UserService = require('../services/user.service');

const getUsers = (req, res) => {
    try {
        debug(req.method + ' ' + req.url);
        res.send('User page');
    } catch (error) {
        handleError(error);
    };
};

const createUser = async (req, res) => {
    try {
        const user = await UserService.createUser(req.body);
        res.send(user);
    } catch (error) {
        handleError(error);
    };
};

module.exports = {
    getUsers,
    createUser,
};
