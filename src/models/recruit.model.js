const { Schema, model } = require("mongoose");

const recruitSchema = new Schema(
  {
    full_name: { type: String, required: true },
    dezignation: { type: String, required: true },
    company: { type: String, required: true },
    email: { type: String, required: true },
    phone_number: { type: Number, required: true },
    catagory: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = model("recruit", recruitSchema);
