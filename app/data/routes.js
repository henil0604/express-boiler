module.exports = [
    {
        path: "/",
        method: "GET",
        type: "hitpoint",
        middlewares: [
            (req, res) => {
                res.send("Hello World")
            }
        ]
    }
]