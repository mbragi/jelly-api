const express = require("express");
const { httpGetRoot } = require("../controller/app.controller");
const Route = express.Router();

Route.get("/", httpGetRoot);
module.exports = Route;
