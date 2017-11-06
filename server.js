var express = require('express');
var http = require('http');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(path.join(__dirname, '/dist')));
app.use('/static/assets/', express.static(path.join(__dirname, '/dist')));

app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/*', function(req, res){
	res.sendFile(path.join(__dirname, './dist/index.html'));
})

var server = http.createServer(app);

// Старт сервера на порту
server.listen(3900, function(){
	console.log('Server running on port: 3900');
});