const { getMessagesUser, getMessagesByIdConversation, sendNewMessage } = require("./messages.service");

module.exports = {
  getConversations: async (req, res) => {
    try {
      const state = await getMessagesUser(req.token);
      res.status(200).json({ data: state });
    } catch (error) {
      console.log("ERROR CREATE USER:", error.message);
      res.status(error.codeStatus).json(error);
    }
  },
  getMessagesWithId: async (req, res) => {
    try {
      const state = await getMessagesByIdConversation(req.token, req.query);
      res.status(200).json({ data: state });
    } catch (error) {
      console.log("ERROR CREATE USER:", error.message);
      res.status(error.codeStatus).json(error);
    }
  },
  sendMessage: async (req, res) => {
    try {
      const state = await sendNewMessage(req.token, req.body);
      res.status(200).json({ data: state });
    } catch (error) {
      console.log("ERROR CREATE USER:", error.message);
      res.status(error.codeStatus).json(error);
    }
  }
};