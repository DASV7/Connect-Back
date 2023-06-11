const LikesModel = require("../../models/likes.model");
const RejectedModel = require("../../../models/rejectedUsers");
module.exports = {
    likesConnectService: async (req, res) => {
        const state = await LikesModel.create(req.body);
        return res.status(200).json(state);
    },
    rejectedConnectService: async (req, res) => {
        const state = await RejectedModel.create(req.body);
        return res.status(200).json(state);
    }
} 