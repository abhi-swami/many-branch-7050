const { Schema, model } = require("mongoose");

const adminSchema = new Schema(
  {
    name: { type: String, required: true },
    mobile: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { versionKey: false }
);

const AdminModel = model("admin", adminSchema);

module.exports = { AdminModel };
