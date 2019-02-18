var http = require('http');
var _ = require('lodash');

var template = require('./templates');
var user = require('./models/user');

var server  = http.createServer(function(request, response){
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end(_.template(template)(user));
});

server.listen(3333, '127.0.0.1', function(){
    console.log('listen...');
});
