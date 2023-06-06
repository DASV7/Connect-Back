const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const preferencesSchema = new mongoose.Schema({
    name: { type: String, required: false },
    description: { type: String, required: false },    
    idUser: { type: Schema.Types.ObjectId, ref: "users" }
}, {
    timestamps: true,
});

module.exports = mongoose.model("preferences", preferencesSchema);