const express = require("express");
const { httpLoginUser } = require("../controller/auth.controller");
const { saveCartData } = require("../controller/cart.controller");
const {
  createProduct,
  getAllProducts,
  createCategory,
  getAllProductsByCategory,
} = require("../controller/product.controller");
const { CreateUser } = require("../controller/user.controller");

const Routes = express.Router();
//@ROUTES for User Model
Routes.post("/register", CreateUser);
Routes.post("/login", httpLoginUser);

//@Routes for Cart model
Routes.post("/cart", saveCartData);

//@Routes for Product model
Routes.post("/", createCategory);
Routes.post("/product", createProduct);
Routes.get("/products/category", getAllProductsByCategory);
module.exports = Routes;
