const { Router } = require("express");
const users = require("./usersModule.route");
const connect = require("./connectModule.route");
const viewLikes = require("./viewLikes.route");
const messages = require("./messagesModule.route");
const userPreferences = require("./userPreferences.route");
const userProfile = require("./profile.route");
const Histories = require("./histories.route");
const returnHistories = require("./returnHistories");
const filters = require("./filters.router");

module.exports = () => {
  const app = Router();
  users(app);
  connect(app);
  viewLikes(app);
  messages(app);
  userPreferences(app);
  userProfile(app);
  Histories(app);
  returnHistories(app)
  filters(app)
  return app;
};
