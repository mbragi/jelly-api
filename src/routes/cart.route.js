const express = require("express");
const {
  httpCreateCart,
  httpGetUserCartByUserId,
} = require("../controller/cart.controller");
const Route = express.Router();
Route.post("/", httpCreateCart);
Route.get("/:id", httpGetUserCartByUserId);
module.exports = Route;
