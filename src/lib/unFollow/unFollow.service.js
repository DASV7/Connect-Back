const Followers = require("../../models/followers.model");

module.exports = {
  unFollow: async (body, myId) => {
    const response = await Followers.deleteOne({
      userBeingFollowed: body.otherId,
      myId: myId,
    });
    return response;
  },
};

// const Followers = require("../../models/followers.model");
// const User = require("../../models/users.model");
// const {
//   Types: { ObjectId },
// } = require("mongoose");

// module.exports = {
//   unFollow: async (body, myId) => {

//     const newFollower = new Followers({ userBeingFollowed: body.userBeingFollowed, myId: myId });
//     const response = await newFollower.save();
//     return response;

//   },
// };
