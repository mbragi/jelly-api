const express = require("express");
const { httpCreateCart } = require("../controller/cart.controller");
const Route = express.Router();
Route.post("/", httpCreateCart);
module.exports = Route;
