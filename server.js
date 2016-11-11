/**
 * Main application file
 */

'use strict';

var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/client'));

app.use('/api/nativefier', require('./api/nativefier/index'));

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname + "/client/index.html"));
});

app.listen(port, function () {
    console.log('Express server listening on port ' + port)
});