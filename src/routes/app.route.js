const express = require("express");
const { httpGetRoot } = require("../controller/app.controller");
const {
  httpGetBanner,
  httpGetHomepage,
  httpCreateAndUpdateBanner,
  httpCreateHomepage,
} = require("../controller/homepage.controller");
const Route = express.Router();

Route.get("/", httpGetRoot);
Route.get("/banner", httpGetBanner);
Route.get("/homepage", httpGetHomepage);
Route.post("/create/banner", httpCreateAndUpdateBanner);
Route.post("/create/home", httpCreateHomepage);
module.exports = Route;
