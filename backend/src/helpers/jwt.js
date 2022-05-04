const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
require('dotenv').config();

const generateToken = async (user) => {
    const { full_name, username, email, id } = user;
    console.log(user)
    return await jwt.sign(
        {
            id,
            full_name,
            username,
            email,
        },
        `${process.env.JWT_SECRET}`,
        {
            algorithm: "HS256",
            expiresIn: 7200,
        }
    );
};

const verifyToken = async (req, res, next) => {
    const authToken = req.get('Authorization');

    if (!authToken) {
        req.isAuth = false;
        return next();
    }

    const token = authToken.split(' ')[1];
    let verify;
    try {
        verify = jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        req.isAuth = false;
        return next()
    }

    if (!verify.id) {
        req.isAuth = false;
        return next()
    }

    const user = await User.findById(verify.id);
    if (!user) {
        req.isAuth = false;
        return next()
    }

    req.userId = user._id;
    req.isAuth = true;
    next()
};

module.exports = {
    generateToken,
    verifyToken,
};
