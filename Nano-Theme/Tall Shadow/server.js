var staticServer = require('static-server');
var server = new staticServer({
    rootPath: './dist/',
    port: 4200

});

server.start(function () {
    console.log('server To', server.port);
});