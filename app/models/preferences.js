const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const preferencesSchema = new mongoose.Schema({
    name: { type: String, required: false },
    description: { type: String, required: false },    
    idUser: { type: Schema.Types.ObjectId, ref: "users" },
    sexuality: { type: String, required: false },    
    height: { type: String, required: false },    
    feelings: { type: String, required: false },    
    interests: { type: String, required: false },    
    education: { type: String, required: false },    
    smoke: { type: String, required: false },    
    drink: { type: String, required: false },    
}, {
    timestamps: true,
});

module.exports = mongoose.model("preferences", preferencesSchema);