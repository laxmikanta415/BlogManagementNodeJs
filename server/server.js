var express = require('express');
var app = express();
var api = require('./api/api');

require('./middleware/app.middleware')(app);

app.use('/api',api);

module.exports = app;
