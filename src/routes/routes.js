const express = require("express");
const { httpLoginUser } = require("../controller/auth.controller");
const { saveCartData } = require("../controller/cart.controller");
const {
  createProduct,
  getAllCategory,
  createCategory,
  getAllProductsByCategory,
  getProduct,
  verifyProduct,
} = require("../controller/product.controller");
const { CreateUser } = require("../controller/user.controller");

const Routes = express.Router();
//@ROUTES for User Model
Routes.post("/register", CreateUser);
Routes.post("/login", httpLoginUser);

//@Routes for Cart model
Routes.post("/cart", saveCartData);

//@Routes for Product && Category model

// @ Admin ROUTES
Routes.post("/", createCategory);
Routes.post("/product", createProduct);

Routes.get("/category", getAllCategory);
Routes.post("/products/category", getAllProductsByCategory);
Routes.post("/product/detail", verifyProduct);
Routes.post("/details", getProduct);

module.exports = Routes;
