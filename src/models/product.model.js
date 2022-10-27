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
    sub_image: [
      {
        option_one: {
          type: String,
        },
        option_two: {
          type: String,
        },
        option_three: {
          type: String,
        },
        option_four: {
          type: String,
        },
        option_five: {
          type: String,
        },
        option_six: {
          type: String,
        },
      },
    ],
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
    inStock: {
      type: Boolean,
      default: true,
    },
    video_url: {
      type: String,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    video_url: {
      type: String,
      default: true,
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
      },
    ],
  },
  { timestamps: true }
);
module.exports = {
  Product: model("product", product, "products"),
};
