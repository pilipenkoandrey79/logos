var http = require('http');
/** модуль, що працює з файловою системою */
var fs = require('fs');

var FILE_NAME = './list.json';

var server  = http.createServer(function(request, response){

    /**
     * встановлюємо універсальні параметри відповіді
     */
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');

    /**
     * група заголовків, що кажуть браузерові, що:
     * - відповідь з цього сервера дозволено для URL * (тобто всім)
     * - дозволено методи GET,PUT,POST,DELETE,PATCH
     * - дозволено приймати всі (*) типи заголвків
     */
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    response.setHeader('Access-Control-Allow-Headers', '*');

    /**
     * розбираємо різні методи запиту
     */
    switch(request.method) {
        case 'GET':
            /** читаємо весь файл в вихідний потік та віддаємо в мережу */
            response.end(fs.readFileSync(FILE_NAME));
        break;
        case 'POST':
            var listData = '';

            /** читаємо з запиту інформацію. Оскільки її може бути багато, то сервер поділить її на порції
             * читання кожної порції відбувається подією data, чку ми тут оброблюємо
             */
            request.on('data', function(data){
                listData += data;
            });

            /**
             * коли все прочитано до кінця, виникає подія end. Ми пишемо все що считали до цього моменту в фпйл
             * Відповідаємо статусом 201 та словом ок
             */
            request.on('end', function(){
                fs.writeFileSync(FILE_NAME, listData);
                response.statusCode = 201;
                response.end('ok');
            });
        break;
        default: response.end();
    }
});

server.listen(3333, '127.0.0.1', function(){
    console.log('listen...');
});
