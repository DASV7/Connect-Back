const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    name: { type: String, required: false },
    lastName: { type: String, required: false },
    email: { type: String, required: false },
    password: { type: String, required: false },
    age: { type: Number, required: false },
    city: { type: String, required: false },
    biologicalSex: { type: String, required: false },
    profession: { type: String, required: false },
    education: { type: String, required: false },
    paymentMethod: { type: Array, required: false },
}, {
    timestamps: true,
});

module.exports = mongoose.model("users", usersSchema);
