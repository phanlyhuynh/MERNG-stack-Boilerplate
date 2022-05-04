const express = require('express');
const HomeRoute = require('./home.route');
const UserRoute = require('./user.route');
const LoginRoute = require('./login.route');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/home',
        route: HomeRoute,
    },
    {
        path: '/users',
        route: UserRoute,
    },
    // {
    //     path: '/login',
    //     route: LoginRoute,
    // },
];


defaultRoutes.forEach(route => {
    router.use(route.path, route.route);
});

module.exports = router;
