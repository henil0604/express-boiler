const STARTING_TIME = Date.now();
const express = require('express');

let app = express();

app.__proto__.__STARTING_TIME = STARTING_TIME;
app.__proto__.express = express;

module.exports = app;