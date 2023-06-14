const { getLikesForUser } = require('./actionsGetFilters.service');

module.exports = {
    likesConnect: async (req, res) => {
        try {
            const state = await getLikesForUser(req);
            return res.status(200).json(state);
        } catch (error) {
            console.log("ERROR get Likes:", error.message);
            return res.status(error.codeStatus).json(error);
        }
    },
}