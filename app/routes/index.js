const { Router } = require("express");
const users = require("./usersModule");

module.exports = () => {
  const app = Router();
  users(app);
  return app;
};
