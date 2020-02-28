const express = require("express");

const configureMiddleware = require("./configure-middleware.js");
const apiRouters = require("./api-router.js");

const server = express();
configureMiddleware(server);

server.use("/api", apiRouters);
server.get("/", (req, res) => res.send("server is up and running"));

module.exports = server;
