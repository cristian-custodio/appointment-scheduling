const express = require("express");
const users = require("../routes/users");
const auth = require("../routes/auth");
const appointments = require("../routes/appointments");


module.exports = function (app) {
  app.use(express.json());
  app.use("/api/users", users);
  app.use("/api/auth", auth);
  app.use("/api/appointments", appointments);
};
