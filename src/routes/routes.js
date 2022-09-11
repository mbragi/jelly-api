const express = require("express");
const { httpLoginUser } = require("../controller/auth.controller");
const { saveCartData } = require("../controller/cart.controller");
const { CreateUser } = require("../controller/user.controller");

const Routes = express.Router();
//@ROUTES for User Model
Routes.post("/register", CreateUser);
Routes.post("/login", httpLoginUser);

//@Routes for Cart model
Routes.post("/cart", saveCartData);
module.exports = Routes;
