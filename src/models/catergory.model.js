const { Schema, model, Types } = require("mongoose");

const catergory = new Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = { Category: model("category", catergory, "categories") };
