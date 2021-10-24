module.exports = [
    {
        name: "disconnect",
        callback: (socket) => {
            log(`Disonnected With ${socket.id}`, "error", "[SOCKET]")
        }
    }
]