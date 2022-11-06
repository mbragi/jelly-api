const { Schema, model, Types } = require("mongoose");

const category = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    img_url: {
      type: String,
      required: true,
    },
    product_number: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = { Category: model("category", category, "categories") };
