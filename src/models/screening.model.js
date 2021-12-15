const { Schema, model } = require("mongoose");

const screeningSchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "user" },
    gender: { type: String, required: true },
    city: { type: String, required: true },
    graduation: { type: Boolean, required: true },
    refferal: { type: String, length: 6 },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = model("screening", screeningSchema);
