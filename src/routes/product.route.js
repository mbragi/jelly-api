const express = require("express");
const {
  createProduct,
  getAllCategory,
  createCategory,
  // getAllProductsByCategory,
  getProduct,
  // verifyProduct,
  httpCreateDetails,
  httpGetCategories,
  httpGetDetails,
} = require("../controller/product.controller");
const Route = express.Router();

//@Routes for Product && Category model

// @ Admin ROUTE
Route.post("/", createCategory);
Route.post("/create/product", createProduct);
// @user Routes
Route.get("/category", getAllCategory);
// Route.post("/products/category", getAllProductsByCategory);
Route.get("/product/detail", httpGetDetails);
Route.get("/details/:id", getProduct);
Route.post("/create/details", httpCreateDetails);
Route.get("/cat", httpGetCategories);

module.exports = Route;
