const { Router } = require("express");
const users = require("./usersModule.route");
const connect = require("./connectModule.route");

module.exports = () => {
  const app = Router();
  users(app);
  connect(app);
  return app;
};
