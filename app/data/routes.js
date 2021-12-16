module.exports = [
    {
        path: "/",
        method: ["GET", "POST"],
        type: "hitpoint",
        middlewares: [
            async (req, res) => {
                res.send("Hello World")
            }
        ],
    },
    {
        path: "/api",
        type: "router",
        routes: require("./api.routes.js")
    },
    {
        type: "middleware",
        middlewares: [
            imp("app/helpers/responseHandler")
        ]
    },
    {
        path: "/rest-service-integration-model",
        type: "hitpoint",
        method: "POST",
        middlewares: [
            (req, res) => {
                const model = imp("app/data/rest-service-integration-model.js");
                res.json(model)
            }
        ]
    }
]