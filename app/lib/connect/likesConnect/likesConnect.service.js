const LikesModel = require("../../../models/likesuser");
const RejectedModel = require("../../../models/rejectedUsers");

module.exports = {
    likesConnectService: async (req) => {
        const { userWhoLike } = req.body
        const { _id } = req.token
        if (!userWhoLike) throw new Error("userLiked is required")
        const state = await LikesModel.create({ userWhoLike, idUser: _id });
        return state
    },
    rejectedConnectService: async (req) => {
        const { userRejected } = req.body
        const { _id } = req.token
        if (!userRejected) throw new Error("userLiked is required")
        const state = await RejectedModel.create({ userRejected, idUser: _id });
        return state
    }
} 