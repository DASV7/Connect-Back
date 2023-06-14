const { likesConnectService, rejectedConnectService } = require("./actionsConnect.service");

module.exports = {
    likesConnect: async (req, res) => {
        try {
            const state = await likesConnectService(req);
            return res.status(200).json(state);
        } catch (error) {
            console.log("ERROR CREATE USER:", error.message);
            return res.status(error.codeStatus).json(error);
        }
    },
    rejectedConnect: async (req, res) => {
        try {
            const state = await rejectedConnectService(req);
            return res.status(200).json(state);
        } catch (error) {
            console.log("ERROR In rejected  USER:", error.message);
            return res.status(error.codeStatus).json(error);
        }
    },
}