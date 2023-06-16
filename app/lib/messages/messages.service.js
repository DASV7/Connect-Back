const RoomMessages = require("../../models/roomChat.model");
const Messages = require("../../models/messages.model");
const { userprojection } = require("../../services/projects/users");
module.exports = {
    getMessagesUser: async ({ _id }) => {
        const room = await RoomMessages.find(
            {
                $or: [{ idUserFirstLike: _id }, { idUserSecondLike: _id }]
            }.populate({
                path: "idUserFirstLike",
                select: userprojection
            })).populate({
                path: "idUserSecondLike",
                select: userprojection
            })

        let ultimateMessages = Messages.find({ roomId: room._id })
        ultimateMessages = ultimateMessages.sort((a, b) => {
            return b.date - a.date
        })
    }


}