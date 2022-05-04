const User = require('../models/user.model');

const getUsers = async () => {
    return await User.find({});
};

const createUser = async (data) => {
    return await User.create(data);
};

module.exports = {
    createUser,
    getUsers,
};
