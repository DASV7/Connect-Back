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
        const ifExists = await Conversation.findOne({ _id: id, members: { $in: [token._id] } }).lean()
        if (!ifExists?._id) throw new Error("Este no es tu chat sapo perro")
        let ultimateMessages = await Messages.find({ conversationId: id }).limit(10).sort({ date: -1 }).lean()
        return ultimateMessages
    },

    sendNewMessage: async (req, res) => {
        const { body } = req
        const { _id } = req.token
        const newMessage = new Messages({
            body,
            conversationId: body.conversationId,
            sender: _id,
            date: new Date(),
        })

        await newMessage.save()
        res.status(200).json(newMessage)

    }




}