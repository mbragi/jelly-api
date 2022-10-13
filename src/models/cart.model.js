const { Schema, model, Types } = require("mongoose");

const cart = new Schema(
  {
    product: {
      type: Types.ObjectId,
      ref: "products",
      required: true,
    },
    quantity: {
      type: String,
      required: true,
      default: "0",
    },
    price: {
      type: String,
      required: true,
      default: "0.00",
    },
    total: {
      type: String,
      required: true,
      default: "0.00",
    },
    cartSummary: [
      {
        subTotal: {
          type: Number,
          default: "0.00",
        },
        grandTotal: {
          type: String,
          default: "0.00",
        },
        shippingPrice: {
          type: String,
          default: "0.00",
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = { Cart: model("cart", cart) };
