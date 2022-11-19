const { Schema, model } = require("mongoose");

const banner = new Schema(
  {
    photoUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = { Banner: model("banner", banner) };
