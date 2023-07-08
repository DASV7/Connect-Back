const { findUserProfile } = require("./profile.service");

module.exports = {
  findUserProfile: async (req, res) => {
    try {
      const state = await findUserProfile(req.token);
      res.status(200).json(state);
    } catch (error) {
      console.log("Erorr al traer datos del usuario:", error.message);
      res.status(error.codeStatus).json(error);
    }
  },
};
