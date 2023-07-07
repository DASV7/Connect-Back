const modelPreferences = require("../../models/preferences");
const {
  Types: { ObjectId },
} = require("mongoose");

module.exports = {
  async userPreferences(params, token) {
    const preferencesData = {
      idUser: token._id,
      ...params,
    };
    const updatePreferences = await modelPreferences.findByIdAndUpdate(token._id, preferencesData, { upsert: true, new: true });
    return updatePreferences;
  },
};
