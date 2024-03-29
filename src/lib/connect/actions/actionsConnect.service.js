const LikesModel = require("../../../models/likesuser");
const RejectedModel = require("../../../models/rejectedUsers");
const Conversation = require("../../../models/conversation");
const Users = require("../../../models/users.model");
module.exports = {
    likesConnectService: async (req) => {
        const { userWhoLike } = req.body
        const { _id } = req.token
        if (!userWhoLike) throw new Error("userLiked is required")
        const isCreated = await LikesModel.findOne({ userWhoLike, idUser: _id });
        if (isCreated) return isCreated

        const match = await isMatch({ _id, userWhoLike })
        let state = {}
        if (!match) {
            state = await LikesModel.create({ userWhoLike, idUser: _id });
            global.socket.emit("connect/newLike", { token: req.token, userFor: userWhoLike });
            return
        }
        const likeDeleted = await LikesModel.deleteOne({ userWhoLike: _id, idUser: userWhoLike })
        global.socket.emit("newMatch", { token: req.token });
        return state
    },
    
    rejectedConnectService: async (req) => {
        const { userRejected } = req.body
        const { _id } = req.token
        if (!userRejected) throw new Error("El usuario ya dio like previamente")
        const isCreated = await RejectedModel.findOne({ userRejected, idUser: _id });
        const likeDeleted = await LikesModel.deleteOne({ userWhoLike: _id, idUser: userRejected })
        if (isCreated?._id) return isCreated
        const state = await RejectedModel.create({ userRejected, idUser: _id });
        return state
    },
}  

async function isMatch({ _id, userWhoLike }) {
    const state = await LikesModel.findOne({ userWhoLike: _id, idUser: userWhoLike }).lean();
    if (!state?._id) return false
    await Conversation.create({
        members: [userWhoLike, _id],
        type: "match",
        timeExpiration: null,
        description: "Da el primer paso!",
    }).catch((err) => {
        console.log("Error Match", err)
    })

    return state
}