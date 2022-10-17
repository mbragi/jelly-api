const { Schema, model } = require("mongoose");

const product = new Schema(
  {
    category_id: {
      type: Schema.Types.ObjectId,
      ref: "categories",
      unique: false,
    },
    category_name: {
      type: String,
    },
    name: {
      type: String,
      // unique: true,
    },
    price: {
      type: Number,
      unique: false,
    },
    price_range: {
      one: {
        type: String,
      },
      two: {
        type: String,
      },
    },

    rating: {
      type: Number,
      default: 0,
    },
    img: {
      type: String,
      unique: false,
    },
    available_colors: [
      {
        color: {
          type: String,
          default: "",
        },
        color_img: {
          type: String,
          default: "",
        },
      },
    ],
    available_quantity: {
      type: String,
    },
    detail: [
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
        function: {
          type: String,
        },
        accessories: { type: String },
        version: { type: String },
        photo_url: { String, unique: false },
      },
    ],
  },
  { timestamps: true }
);
module.exports = {
  Product: model("product", product, "products"),
};
