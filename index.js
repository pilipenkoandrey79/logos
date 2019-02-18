var http = require('http');
var _ = require('lodash');

var template = require('./templates');

var server  = http.createServer(function(request, response){

    var user = {
        name: 'Andrii',
        surname: 'Sidorenko',
        projects: [
            {
                title: 'project1',
                started: (new Date()).setMonth(0).toLocaleString()
            },
            {
                title: 'project2',
                started: (new Date()).setMonth(1).toLocaleString()
            },
        ]
    };

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end(_.template(template)(user));
});

server.listen(3333, '127.0.0.1', function(){
    console.log('listen...');
});
