const winston = require("winston");
//const config = require("config");
require("express-async-errors");

module.exports = function () {
  winston.exceptions.handle(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({ filename: "uncaughtExceptions.log" })
  );

  process.on("unhandledRejection", (ex) => {
    throw ex; //Winston will log the exeption
  });

  winston.add(new winston.transports.File({ filename: "logfile.log" }));

  // const db = config.get("db");
  //Log to database

};
