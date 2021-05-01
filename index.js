const winston = require("winston");
const express = require("express");
const config = require("config");
const app = express();
const path = require("path");

require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/logging")();
require("./startup/db")();


const port = process.env.PORT || config.get("port");
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

module.exports = server;

