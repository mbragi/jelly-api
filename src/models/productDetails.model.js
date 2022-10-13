import mongoose, { Schema, model } from "mongoose";

const detail = new Schema(
  {
    product_id: {
      type: mongoose.Types.ObjectId,
      ref: "products",
    },
    type: {
      type: mongoose.Types.ObjectId,
      ref: "categories",
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

module.exports = { Detail: model("detail", detail, "details") };
