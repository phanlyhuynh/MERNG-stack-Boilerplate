var express = require('express');
var router = express.Router();
var debug = require('debug')('http')

/* GET home page. */
router.get('/', function(req, res, next) {
    debug(req.method + ' ' + req.url);
    res.send('Home page');
});

module.exports = router;
