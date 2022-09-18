const { Schema, model, Types } = require("mongoose");

const cart = new Schema(
  {
    user: {
      type: Types.ObjectId,
      ref: "users",
    },
    product: {
      type: Types.ObjectId,
      ref: "products",
      required: true,
    },
    quatity: {
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
