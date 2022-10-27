const express = require("express");
const {
  createProduct,
  getAllCategory,
  createCategory,
  getAllProductsByCategory,
  getProduct,
  // verifyProduct,
  httpGetCategories,
  httpUpdateProduct,
} = require("../controller/product.controller");
const Route = express.Router();

//@Routes for Product && Category model

// @ Admin ROUTE
Route.post("/", createCategory);
Route.post("/create/product", createProduct);
Route.post("/update/:id", httpUpdateProduct);
// @user Routes
Route.get("/category", getAllCategory);
Route.get("/products/category/:id", getAllProductsByCategory);
Route.get("/details/:id", getProduct);
Route.get("/cat", httpGetCategories);

module.exports = Route;
