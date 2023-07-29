const { Schema, model } = require("mongoose");

const filters = new Schema(
  {
    interestIn: { type: String, required: true },
    smoke: { type: Boolean, default: false },
    drink: { type: Boolean, default: false },
    hijos: { type: Boolean, default: false },
    pests: { type: Boolean, default: false },
    children: { type: Boolean, default: false },
    single: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = model("filters", filters);
