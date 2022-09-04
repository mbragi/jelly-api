const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server started successfully",
  });
});

module.exports = { app };
