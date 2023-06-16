const { Schema, model } = require("mongoose");

const roomChat = new Schema({
    idUserFirstLike: { type: Schema.Types.ObjectId, ref: "user", required: true },
    idUserSecondLike: { type: Schema.Types.ObjectId, ref: "user", required: true },
    type: { type: String, required: true, default: "match", enum: ["match", "direct"] },
    timeExpiration: { type: Date, required: false },
    description: { type: String, required: false },    
}, {
    timestamps: true,
});

module.exports = model("roomChat", roomChat);
