const { Schema, model } = require("mongoose");

const product = new Schema({
  category_id: {
    type: Schema.Types.ObjectId,
    ref: "categories",
    unique: false,
  },
  name: {
    type: String,
    unique: true,
  },
  price: {
    type: String,
    unique: false,
  },
  price_range: [
    {
      one: {
        type: String,
      },
      two: {
        type: String,
      },
    },
  ],
  rating: {
    type: String,
    // required: true,
    default: "0",
    unique: false,
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
  product_detail: [
    {
      key_features: {
        type: String,
      },
      specifications: {
        type: String,
      },
      type: {
        type: String,
        ref: "categories",
      },
      model: {
        type: String,
      },
    },
  ],
  available_quantity: {
    type: String,
    // default: "",
    // unique: true
  },
});
module.exports = {
  Product: model("product", product, "products"),
};
