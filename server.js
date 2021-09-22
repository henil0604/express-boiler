const log = require("./app/helpers/log");
log("Loading Modules...");
let app = require('./app');
const env = require("./app/helpers/env");
const RouterManager = require("./app/middlewares/RouterManager")
const PORT = env("PORT") || 4141;

app.use(require("./app/middlewares/hit"));
app.use(require("./app/middlewares/RequestParser"));

// Setting Globals
globalThis.env = env;
globalThis.app = app;
globalThis.log = log;

app = RouterManager(
    app,
    require("./app/data/routes")
)


app.listen(PORT, () => {
    log(`Listening on PORT {${PORT}}`, 'success');
    log(`Load time: {${Date.now() - app.__STARTING_TIME}ms}`);
});