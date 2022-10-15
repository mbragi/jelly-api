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
Route.get("/products/category/:id", getAllProductsByCategory);
Route.get("/product/detail/:id", httpGetDetails);
Route.get("/details/:id", getProduct);
Route.post("/create/details", httpCreateDetails);
Route.get("/cat", httpGetCategories);

module.exports = Route;
