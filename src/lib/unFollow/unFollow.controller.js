const { unFollow } = require("./../unFollow/unFollow.service");

module.exports = {
    unFollow: async (req, res) => {
    try {
      const state = await unFollow(req.query, req.token._id);
      res.status(200).json(state);
    } catch (error) {
      console.error("Error al dejar de seguir al usuario:", error.message);
      res.status(500).json({ error: "Error al dejar de seguir al usuario:" });
    }
  },

};
