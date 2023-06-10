const { getUsersConnect } = require("./connect.service");

module.exports = {
  getListFilters: async (req, res) => {
    try {
      const state = await getUsersConnect(req.body);
      return res.status(200).json(state);
    } catch (error) {
      console.log("ERROR CREATE USER:", error.message);
      return res.status(error.codeStatus).json(error);
    }
  },
}