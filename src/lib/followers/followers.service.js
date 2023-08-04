const Followers = require("../../models/followers.model");
const {
    Types: { ObjectId },
  } = require("mongoose");

module.exports = {
  followUser: async (body, myId) => {

    const newFollower = new Followers({ userBeingFollowed: body.userBeingFollowed, myId:myId });
    const response = await newFollower.save();
    return response;
  },
};
