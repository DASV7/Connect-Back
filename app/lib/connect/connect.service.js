const UserModel = require("../../models/users.model");


module.exports = {
    getUsersConnect: async (req, res) => {
        const state = await UserModel.find({}, {
            __v: 0,
            password: 0,
            passwordDecript: 0,
            paymentMethod: 0,
        });
        return state
    }
}