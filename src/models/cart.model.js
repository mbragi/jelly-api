const { Schema, model, Types } = require("mongoose");

const cart = new Schema(
  {
    user_id: {
      type: String,
      ref: "users",
    },
    products: [
      {
        product_id: {
          type: Types.ObjectId,
          ref: "products",
          required: true,
        },
        product_name: {
          type: String,
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
      },
    ],
    total: {
      type: String,
      required: true,
      default: "0.00",
    },
    // subTotal: {
    //   type: String,
    //   default: "0.00",
    // },
    grandTotal: {
      type: String,
      default: "0.00",
    },
    shippingPrice: {
      type: String,
      default: "0.00",
    },
  },
  { timestamps: true }
);

module.exports = { Cart: model("cart", cart) };
