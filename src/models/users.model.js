const { Schema, model } = require("mongoose");

const usersSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    passwordDecript: { type: String, required: true },
    description: { type: String, required: false },
    birthday: { type: Date, required: true },
    city: { type: String, required: false },
    biologicalSex: { type: String, required: true },
    profession: { type: String, required: false },
    education: { type: String, required: false },
    paymentMethods: { type: Array, required: false },
    pictures: { type: Array, required: false },
    lastLogin: { type: Date, required: false },    
    status: { type: String, required: false },
    hereFor: { type: String, required: true },
    bloqued: { type: Boolean, required: false, default: false },
    haveHistories: { type: Boolean, required: false, default: false },
    histories: { type: Array, required: false },
    ip: { type: String, required: false },

}, {
    timestamps: true,
});

module.exports = model("user", usersSchema);
