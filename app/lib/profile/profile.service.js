const Users = require("../../models/users.model");
const Preferens = require("../../models/preferences");
const { userprojection } = require("../../services/projects/users");

module.exports = {
  findUserProfile: async ({ _id }) => {
    const user = await Users.findOne({ _id }, userprojection).lean();
    const preferences = await Preferens.findOne({ idUser: _id }).lean();
    return { user, preferences };
  },
};
