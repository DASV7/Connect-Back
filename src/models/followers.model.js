const { Schema, model } = require("mongoose");

const followersSchema = new Schema({
  myId: { type: Schema.Types.ObjectId, ref: "user", required: true },
  userBeingFollowed: { type: Schema.Types.ObjectId, ref: "user", required: true },
}, {
  timestamps: true,
});

module.exports = model("Followers", followersSchema);
