const { Schema, model } = require("mongoose");
const order = new Schema(
  {
    user_id: {},
    category_id: {},
    cart_id: {},
    is_paid: {},
    is_delivered: {},
    is_approved: {},
    shipping_address: {},
    payment_method: {},
  },
  { timestamps: true }
);
module.exports = { Order: model("order", order, "orders") };
