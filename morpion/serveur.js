//npm install express

var express = require('express');
var server = express();
server.get('/morpion.html', function(request, response) {
  response.sendfile('./morpion.html');
});
server.get('/morpion.js', function(request, response) {
    response.sendfile('./morpion.js');
});
server.get('/morpion.css', function(request, response) {
    response.sendfile('./morpion.css');
});
server.get('/image/croi.png', function(request, response) {
    response.sendfile('./image/croi.png');
});
server.get('/image/rond.png', function(request, response) {
    response.sendfile('./image/rond.png');
});
server.listen(8050);