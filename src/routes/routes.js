const express = require("express");
const { httpLoginUser } = require("../controller/auth.controller");
const { CreateUser } = require("../controller/user.controller");

const Routes = express.Router();

Routes.post("/register", CreateUser);
Routes.post("/login", httpLoginUser);

module.exports = Routes;
