const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const detail = new Schema(
  {
    type: {
      type: String,
    },
    key_features: {
      type: String,
    },
    specifications: {
      type: String,
    },
    model: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = {
  Detail: model("detail", detail, "details"),
};
