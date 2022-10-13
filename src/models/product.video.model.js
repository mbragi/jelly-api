const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const videoSchema = new Schema(
  {
    productId: {
      type: String,
      ref: "products",
    },
    categoryId: {
      type: String,
      ref: "categories",
    },
    videos: {
      type: [
        {
          title: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
            unique: true,
          },
        },
      ],
    },
  },
  { timestamps: true }
);

module.exports = model("Video", videoSchema);
