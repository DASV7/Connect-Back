const { Router } = require("express");
const users = require("./usersModule.route");
const connect = require("./connectModule.route");
const viewLikes = require("./viewLikes.route");
const messages = require("./messagesModule.route");
const userPreferences = require("./userPreferences.route");
module.exports = () => {
  const app = Router();
  users(app);
  connect(app);
  viewLikes(app);
  messages(app);
  userPreferences(app);
  return app;
};
