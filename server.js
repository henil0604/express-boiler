const log = require("./app/helpers/log");
log("Loading Modules...");
let app = require('./app');
const env = require("./app/helpers/env");
const RouterManager = require("./app/middlewares/RouterManager")
const PORT = env("PORT") || 4141;
const path = require("path");
const requestIp = require('request-ip');
const useragent = require('express-useragent');

// Initilizing MongoDb Connection
require("./app/helpers/InitializeMongoDb")()

app.use(require("./app/middlewares/hit"));

app.use(useragent.express())
app.use(requestIp.mw())

// Setting Globals
globalThis.app = app;
globalThis.env = require("@helper-modules/env");
globalThis.log = require("@helper-modules/log");
globalThis.helperJs = require("@henil0604/helperjs");
globalThis.imp = (d) => {
    const p = `${path.join(__dirname, d)}`
    return require(p);
}

app.use(require("./app/middlewares/RequestParser"));

app = RouterManager(
    app,
    require("./app/data/routes")
)

// Preparing Socket Server
const { server, io } = require("./app/helpers/SocketIo.js")(app)

globalThis.server = server;
globalThis.io = io;

server.listen(PORT, () => {
    log(`Listening on PORT {${PORT}}`, 'success');
    log(`Load time: {${Date.now() - app.__STARTING_TIME}ms}`);
});