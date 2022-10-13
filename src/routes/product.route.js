const express = require("express");
const {
  createProduct,
  getAllCategory,
  createCategory,
  getAllProductsByCategory,
  getProduct,
  // verifyProduct,
} = require("../controller/product.controller");
const Route = express.Router();

//@Routes for Product && Category model

// @ Admin ROUTE
Route.post("/", createCategory);
Route.post("/create/product", createProduct);
// @user Routes
Route.get("/category", getAllCategory);
Route.post("/products/category", getAllProductsByCategory);
// Routes.post("/product/detail", verifyProduct);
Route.get("/details/:id", getProduct);

module.exports = Route;
