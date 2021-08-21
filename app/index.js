const STARTING_TIME = Date.now();
const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

let app = express();

// Applying bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Applying cookieParser
app.use(cookieParser())

app.__proto__.__STARTING_TIME = STARTING_TIME;
app.__proto__.express = express;

module.exports = app;