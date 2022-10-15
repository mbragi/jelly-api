const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const detail = new Schema(
  {
    product_id: {
      type: mongoose.Types.ObjectId,
      ref: "products",
      unique: true,
    },
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
