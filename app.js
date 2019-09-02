// requires
const app = require('./config/server.js');

// environment variables
process.env.NODE_ENV = 'development';

// uncomment below line to test this code against staging environment
// process.env.NODE_ENV = 'staging';

// config variables
const config = require('./config/config.js');

var server = app.listen(global.gConfig.node_port, () => {
    console.log(`${global.gConfig.app_name} listening on port ${global.gConfig.node_port}`);
});

var io = require('socket.io').listen(server);

app.set('io', io);

// criar conexao por websocket
io.on('connection', (socket) => {
    console.log('Usuário conectou!!');

    socket.on('disconnect', () => {
        console.log('Usuario desconectou!');
    })
})