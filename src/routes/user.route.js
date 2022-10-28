const express = require("express");
const {
  httpLoginUser,
  httpGetUserExceptAdmin,
} = require("../controller/auth.controller");
const { CreateUser } = require("../controller/user.controller");
const { saveCartData } = require("../controller/cart.controller");

const Route = express.Router();
//@ROUTES for User Model
Route.post("/register", CreateUser);
Route.post("/login", httpLoginUser);
Route.get("/", httpGetUserExceptAdmin);

//@Routes for Cart model
Route.post("/cart", saveCartData);

module.exports = Route;
