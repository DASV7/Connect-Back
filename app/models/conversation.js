const { Schema, model } = require("mongoose");

const conversation = new Schema({
    members: { type: Array, required: true },
    type: { type: String, required: true, default: "match", enum: ["match", "direct","ramdom"] },
    timeExpiration: { type: Date, required: false },
    ultimateMessage: { type: Object, required: false },
}, {
    timestamps: true,
});

module.exports = model("conversation", conversation);
