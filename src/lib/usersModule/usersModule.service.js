const userModel = require("../../models/users");

module.exports = {
    async createNewUser(params) {
        const userToCreate = params;
        const newUser = new userModel(userToCreate);
        const resultUser = await newUser.save();
        return resultUser;
    },
    editUserModule(params) { },
    deleteuserModule(params) { },
};
