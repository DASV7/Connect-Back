const { getUsersConnect } = require("./connect.service");

module.exports = {
  getListFilters: async (req, res) => {
    try {
      const state = await getUsersConnect(req.token);
      res.status(200).json({ data: state });
    } catch (error) {
      console.log("ERROR CREATE USER:", error.message);
      res.status(error.codeStatus).json(error);
    }
  },
};
