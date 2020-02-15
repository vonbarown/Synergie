const socket_io = require('socket.io');
const io = socket_io();
const socketApi = {};

socketApi.io = io;

io.on('connection', function (socket) {
    console.log('A user connected');
});

socketApi.sendNotification = function () {
    io.sockets.emit('hello', { msg: 'Hello World!' });
}

module.exports = socketApi;