module.exports = [
    {
        name: "connection",
        callback: (socket) => {
            log(`Connected With ${socket.id}`, "info", "[SOCKET]")
        }
    }
]