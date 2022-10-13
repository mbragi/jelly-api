const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
// const userRoute = require("./src/routes/user.route");
// const { use } = require("./src/routes/routes");
const AppRoute = require("./src/routes/app.route");
const ProductRoute = require("./src/routes/product.route");
const UserRoute = require("./src/routes/user.route");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("dev"));
app.use("/api", AppRoute);
app.use("/api", ProductRoute);
app.use("/api/auth", UserRoute);



module.exports = { app };
