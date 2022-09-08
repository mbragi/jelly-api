const express = require("express");
const { CreateUser } = require("../controller/user.controller");

const Routes = express.Router();

Routes.post("/register", CreateUser);

module.exports = Routes;
