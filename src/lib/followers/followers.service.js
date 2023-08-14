const Followers = require("../../models/followers.model");
const User = require("../../models/users.model");
const {
  Types: { ObjectId },
} = require("mongoose");

module.exports = {
  followUser: async (body, myId) => {
    const newFollower = new Followers({ userBeingFollowed: body.userBeingFollowed, myId: myId });
    const response = await newFollower.save();
    return response;
  },

  getFollow: async (myId) => {
    const followedUsers = await Followers.find({ myId: myId });
    const usersWithHistories = await User.aggregate([
      {
        $match: {
          _id: { $in: followedUsers.map((followedUser) => followedUser.userBeingFollowed) },
          haveHistories: true,
        },
      },
      {
        $lookup: {
          from: "histories", // Cambia "histories" por el nombre de tu colección de historias
          localField: "_id",
          foreignField: "userId",
          as: "histories",
        },
      },
    ]);
    return usersWithHistories;
  },
};
