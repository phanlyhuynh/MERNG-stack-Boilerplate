const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

router.route('/')
.post(async function (req, res, next) {
    try {
        const user = await User.findOne({
            username: req.body.username,
            password: req.body.password,
        });

        if (user) {
            req.session.user = user;
            console.log(req.session.user)
            res.status(200)
            res.send('Login succesfully!!!');
        }
    } catch (error) {
        console.log(error);
    }
});

router.route('/check')
.get(function (req, res, next) {
    res.send(req.session)
    // if (req.session.user) {
    //     res.send('logged in')
    // }
});

module.exports = router;
