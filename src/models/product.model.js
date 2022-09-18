const { Schema, model } = require("mongoose");

const product = new Schema({
  category_id: {
    type: Schema.Types.ObjectId,
    ref: "categories",
    unique: false,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: String,
    required: true,
    unique: false,
  },
  rating: {
    type: String,
    // required: true,
    default: "0",
    unique: false,
  },
  img: {
    type: String,
    required: true,
    unique: false,
  },
});
module.exports = {
  Product: model("product", product, "products"),
};
