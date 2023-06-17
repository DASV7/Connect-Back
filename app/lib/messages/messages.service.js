const Conversation = require("../../models/conversation");
const Messages = require("../../models/messages.model");
const { userprojection } = require("../../services/projects/users");
module.exports = {
    getMessagesUser: async ({ _id }) => {
        const room = await Conversation.find({
            members: { $in: [_id] },
        }).populate({
            path: 'members',
            model: 'user',
            select: userprojection,
        }).lean()
        return room
    },
    
    getMessagesByIdConversation: async (token, { id }) => {
        const ifExists = await Conversation.findOne({ _id: id, members: { $in: [token._id] } })
            .populate({ path: 'members', model: 'user', select: userprojection }).lean()
        if (!ifExists?._id) return null
        let ultimateMessages = await Messages.find({ conversationId: id }).limit(10).sort({ date: 1 }).lean()
        return { members: ifExists.members, messages: ultimateMessages }
    },

    sendNewMessage: async (sender, info) => {

        if (!info.message) return null
        const newMessage = new Messages({
            message: info.message,
            conversationId: info.conversationId,
            sender: sender._id,
            date: new Date(),
        })

        const createMessage = await newMessage.save()

        const members = await Conversation.findOne({ _id: info.conversationId }).lean()
        global.socket.emit("messages/newMessage", { token: sender, userFor: { toFront: info.conversationId, inSocket: members.members }, data: createMessage });

        return createMessage

    }




}