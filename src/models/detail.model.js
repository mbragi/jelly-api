const { Schema, model } = require("mongoose");

const detail = new Schema(
  {
    category_id: {
      type: String,
      ref: "categories",
    },
    type: {
      type: String,
      ref: "products",
    },
    key_features: {
      type: String,
    },
    specifications: {
      type: String,
      ref: "products",
    },
    model: {
      type: String,
    },
    function: {
      String,
    },
    accessories: { String },
    version: { String },
    img_url: { String, unique: false },
  },
  { timestamps: true }
);
module.exports = { Detail: model("detail", detail, "details") };
