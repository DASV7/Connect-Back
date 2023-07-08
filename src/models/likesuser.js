const { Schema, model } = require("mongoose");

const likesUser = new Schema({
    idUser: { type: Schema.Types.ObjectId, ref: "user", required: true },
    userWhoLike: { type: Schema.Types.ObjectId, ref: "user", required: true },
}, {
    timestamps: true,
});

module.exports = model("likesUser", likesUser);
