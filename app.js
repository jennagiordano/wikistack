"use strict";

var express = require("express");
var app = express();
var routes = require("./routes/index");

module.exports = app; // this line is only used to make testing easier.

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/users", routes);

// remember to plug in your router and any other middleware you may need here (i.e. body parser, mounting any router-level middleware, etc.)

if (!module.parent) app.listen(3000); // conditional prevents a very esoteric EADDRINUSE issue with mocha watch + supertest + npm test.
