const { Router } = require("express");
const users = require("./usersModule.route");
const connect = require("./connectModule.route");
const viewLikes = require("./viewLikes.route");
module.exports = () => {
  const app = Router();
  users(app);
  connect(app);
  viewLikes(app);
  return app;
};
