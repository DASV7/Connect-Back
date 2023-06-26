const modelPreferences = require("../../lib/preferences/preferences");

module.exports = {
  async userPreferences(params) {
    const userPrefences = new modelPreferences(params);
    const newPreferences = await userPrefences.save();
    console.log(newPreferences);
    return newPreferences;
  },
};
