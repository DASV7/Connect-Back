const { Schema, model } = require("mongoose");

const messages = new Schema({
    idUser: { type: Schema.Types.ObjectId, ref: "user", required: true },
    idDestination: { type: Schema.Types.ObjectId, ref: "roomChat", required: true },
    type: { type: String, required: true,default: "regular" },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now },
    isRead: { type: Boolean, default: false },

}, {
    timestamps: false,
});

module.exports = model("messages", messages);
