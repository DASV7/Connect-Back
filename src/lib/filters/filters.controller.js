const { filters } = require("./filters.service");

module.exports = {

    filters: async (req, res) => {
    try {
      const state = await filters(req.body);
      res.status(200).json({ data: state });
    } catch (error) {
      console.log("ERROR CREATE USER:", error.message);
      res.status(error.codeStatus).json(error);
    }
  },

};
