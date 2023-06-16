const Conversation = require("../../models/conversation");
const Messages = require("../../models/messages.model");
const { userprojection } = require("../../services/projects/users");
module.exports = {
    getMessagesUser: async ({ _id }) => {
        const room = await Conversation.findOne({
            members: { $in: [_id] },
        }).populate({
            path: 'members',
            model: 'user'
        })

        // let ultimateMessages = Messages.find({ roomId: room._id }).limit(10)
        // ultimateMessages = ultimateMessages.sort((a, b) => {
        //     return b.date - a.date
        // })
    }


}