const User = require("../../../src/models/users.model");
const Followers = require("../../../src/models/followers.model");
const { userprojection } = require("../../../src/services/projects/users");
const {
  Types: { ObjectId },
} = require("mongoose");
const modules = {};

modules.returnHistories = async ({ _id }) => {
  const query = [
    {
      $lookup: {
        from: "followers",
        localField: "_id",
        foreignField: "userBeingFollowed",
        as: "followed",
      },
    },
    { $match: { followed: { $size: 0 }, haveHistories: true, _id: { $ne: new ObjectId(_id) } } },
  ];
  const users = await User.aggregate(query);
  return users;
};

module.exports = modules;
