const express = require('express');
const app = express();
const createError = require('http-errors');
const routes = require('./routes');
const morgan = require('morgan');
const session = require('express-session');
var cookieParser = require('cookie-parser');
const rootGraphql = require('./graphql');
const cors = require('cors');
const jwtHelper = require('./helpers/jwt');

global.logger = morgan('combined');

app.use(morgan('combined'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.set('trust proxy', 1);
app.use(jwtHelper.verifyToken)
// app.use(cookieParser());
// app.use(session({
//     secret: '123',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         maxAge: 1
//     }
// }))

app.use('/api', routes);

app.use('/api/graphql', rootGraphql);

app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send('Error');
});

module.exports = app
