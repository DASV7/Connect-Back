const { Schema, model } = require("mongoose");

const rejected = new Schema({
    idUser: { type: Schema.Types.ObjectId, ref: "user", required: true },
    userRejected: { type: Schema.Types.ObjectId, ref: "user", required: true },
}, {
    timestamps: true,
});

module.exports = model("dislike", rejected);
