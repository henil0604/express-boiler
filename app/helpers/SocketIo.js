const http = require('http');
const { Server, Socket } = require("socket.io");

const Manager = (io) => {
    const IoEvents = imp("app/data/events.io.socket.js");
    const SocketEvents = imp("app/data/events.socket.socket.js");

    IoEvents.forEach(e => {

        io.on(e.name, (...args) => {

            e.callback(...args);

            args.forEach(e2 => {
                if (e2 instanceof Socket) {
                    SocketEvents.forEach(e3 => {
                        e2.on(e3.name, (...args) => {
                            e3.callback(e2, ...args)
                        })
                    })
                }
            })
        })
    })

    return io;
}

const Init = (app) => {

    const server = http.createServer(app);
    let io = new Server(server, {
        cors: {
            origin: '*',
        }
    });

    io = Manager(io)

    return { server, io };
}


module.exports = Init;