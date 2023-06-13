const UsuarioModelo = require("../../models/users.model");
const likesUsers = require("../../models/likesuser");
const rejectedUsers = require("../../models/rejectedUsers")
const { Types: { ObjectId } } = require("mongoose");

module.exports = {
    getUsersConnect: async ({ _id }) => {

        //to do 
        const liker = await likesUsers.find({ idUser: _id });
        const reject = await rejectedUsers.find({ idUser: _id });

        const liked = liker.map(e => e.userWhoLike);
        const rejected = reject.map(e => e.userRejected);

        const state = await UsuarioModelo.find({
            $and: [
                { _id: { $nin: [...liked, ...rejected] } },
                { _id: { $ne: _id } }
            ]
        }, { password: 0, __v: 0, passwordDecript: 0 }).limit(10)
            .lean();
        return state;
    }
};
