const { Schema, model } = require("mongoose");

const user = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      immutable: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = { User: model("user", user) };
