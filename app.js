const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const Routes = require("./src/routes/routes");
const { use } = require("./src/routes/routes");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("combined"));
app.use(Routes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server started successfully",
  });
});

module.exports = { app };
