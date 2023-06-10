const { Schema } = require("mongoose");

const likesUser = new Schema({
    idUser: { type: Schema.Types.ObjectId, ref: "user", required: true },
    userILike: { type: Schema.Types.ObjectId, ref: "user", required: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model("likesUser", likesUser);
