const { followUser, getFollow } = require("./../followers/followers.service");

module.exports = {
  followUser: async (req, res) => {
    try {
      const state = await followUser(req.body, req.token._id);
      res.status(200).json(state);
    } catch (error) {
      console.error("Error al seguir al usuario:", error.message);
      res.status(500).json({ error: "Error al seguir al usuario" });
    }
  },

  getFollow: async (req, res) => {
    try {
      const state = await getFollow(req.token._id);
      res.status(200).json(state);
    } catch (error) {
      console.error("Error al seguir al usuario:", error.message);
      res.status(500).json({ error: "Error al seguir al usuario" });
    }
  },
};
