const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    passwordDecript: { type: String, required: true },
    birthday: { type: Date, required: true },
    city: { type: String, required: false },
    biologicalSex: { type: String, required: true },
    profession: { type: String, required: false },
    education: { type: String, required: false },
    paymentMethod: { type: Array, required: false },
    pictures: { type: Array, required: false },

}, {
    timestamps: true,
});

module.exports = mongoose.model("user", usersSchema);
