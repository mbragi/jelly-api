const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
// const userRoute = require("./src/routes/user.route");
// const { use } = require("./src/routes/routes");
const AppRoute = require("./src/routes/app.route");
const ProductRoute = require("./src/routes/product.route");
const UserRoute = require("./src/routes/user.route");
const CartRoute = require("./src/routes/cart.route");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// const whitelist = ["www.evtop.org", "http://localhost"];
const whitelist = [
  "http://localhost:3000",
  "https://evtop.netlify.app",
  // "https://unity-gate.vercel.app",
  "https://www.evtop.org",
];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use("/api/app", AppRoute);
app.use("/api", ProductRoute);
app.use("/api/auth", UserRoute);
app.use("/api/cart", CartRoute);

module.exports = { app };
