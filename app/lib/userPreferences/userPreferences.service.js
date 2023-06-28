const modelPreferences = require("../../models/preferences");

module.exports = {
  async userPreferences(params, token) {
    const userPrefences = new modelPreferences({ ...params, idUser: token._id });
    const newPreferences = await userPrefences.save();
    return newPreferences;
  },
};
