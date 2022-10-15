const express = require("express");
const {
  createProduct,
  getAllCategory,
  createCategory,
  getAllProductsByCategory,
  getProduct,
  // verifyProduct,
  httpCreateDetails,
  httpGetCategories,
  httpGetDetails,
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
Route.get("/product/detail/:id", httpGetDetails);
Route.get("/details/:id", getProduct);
Route.post("/create/details", httpCreateDetails);
Route.get("/cat", httpGetCategories);

module.exports = Route;
