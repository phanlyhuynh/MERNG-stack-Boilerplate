const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const authHeplper = require('../helpers/jwt');

const login = async (username, password) => {
    // TODO: validate username, password

    const user = await User.findOne({
        username,
        password,
    });

    if (!user) {
        // TODO: handle error user not found
    }

    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword) {
        //TODO: handle error password not match
    }

    const token = await authHeplper.generateToken(user);

    return {
        user,
        id: user._id,
        token,
    }
};

module.exports = {
    login,
};
