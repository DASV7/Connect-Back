const User = require('../../../src/models/users.model');
const { userprojection } = require("../../../src/services/projects/users");

const modules = {};

modules.returnHistories = async () => {
  try {
    const users = await User.find({ haveHistories: true }, userprojection).lean()
    return users;
  } catch (error) {
    console.error('Error al retornar historias:', error);
  }
};

module.exports = modules;
