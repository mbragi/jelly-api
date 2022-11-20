const { Cart } = require("../models/cart.model");
const { User } = require("../models/user.model");

async function httpCreateCart(req, res) {
  let { user_id } = req.body;
  try {
    const isUser = await User.findOne({ _id: user_id });
    if (!isUser) {
      res.status(404).json({
        message: "user not signed in",
        success: false,
      });
      return;
    }
    const cart = new Cart({
      ...req.body,
    });
    await cart.save();
    const data = await Cart.find({ user_id: user_id });
    if (data) {
      res.status(200).json({
        message: "checkout successful... ",
        success: true,
        data: data,
      });
      return;
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
      type: "server error",
    });
  }
}

async function httpGetUserCartByUserId(req, res) {
  let { id } = req.params;
  try {
    if (!id) {
      res.status(400).json({
        message: "unable to process request",
        success: false,
      });
      return;
    }
    const data = await Cart.find({ user_id: id });
    res.status(200).json({
      message: "success",
      data: data,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      type: "server error!",
      success: false,
    });
  }
}

module.exports = { httpCreateCart, httpGetUserCartByUserId };
