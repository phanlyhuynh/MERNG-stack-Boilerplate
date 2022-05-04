var moongoose = require('mongoose');
require('dotenv').config();

var mongoDB = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE_NAME}?authSource=admin`;

// var connect = moongoose.createConnection(mongoDB, function (err) {
//     if (err) throw err;
//     console.log('Successfully connected');
//  });

// when using await
// connect.on('connected', function () {
//     console.log('Connected DB successfully')
// });

// connect.on('disconnected', function (err) {
//     console.log('Connect DB failed')
//     throw err;
// });

module.exports = mongoDB;
