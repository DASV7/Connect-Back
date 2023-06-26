const { userPreferences } = require("./userPreferences.service");
// 

module.exports = {
  userPreferences: async (req, res) => {
    try {
      const state = await userPreferences(req.body);
      res.
      status(200).json({ data: state });
    } catch (error) {
      console.log("ERROR userPrefences", error.message);
      res.status(error.codeStatus).json(error);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 }
  },
};
