const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

router.route('/')
.get(UserController.getUsers)
.post(UserController.createUser);

module.exports = router;
