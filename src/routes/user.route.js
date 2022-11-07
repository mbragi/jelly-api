const express = require("express");
const {
  httpLoginUser,
  httpGetUserExceptAdmin,
} = require("../controller/auth.controller");
const { CreateUser } = require("../controller/user.controller");

const Route = express.Router();
//@ROUTES for User Model
Route.post("/register", CreateUser);
Route.post("/login", httpLoginUser);
Route.get("/", httpGetUserExceptAdmin);

module.exports = Route;
