var http = require('http');
var _ = require('lodash');

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

    var template = `
    <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <title>Test</title>
        </head>
        <body>
            <div class="container">
                <h1><%- name %> <%- surname %></h1>
            </div>
        </body>
    </html>`;

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.write(_.template(template)({user: user}));
    response.end();
});

server.listen(3333, '127.0.0.1', function(){
    console.log('listen...');
});
