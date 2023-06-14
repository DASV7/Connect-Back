const LikesModel = require('../../../models/likesuser');
const { userprojection } = require("../../../services/projects/users")
module.exports = {
    getLikesForUser: async (req, res) => {
        const users = await LikesModel.find({ userWhoLike: req.token._id })?.populate('idUser', userprojection).lean();
        return users?.map(user => user.idUser)
    }
}