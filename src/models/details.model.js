const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const detail = new Schema({ timestamps: true });

module.exports = {
  Detail: model("detail", detail, "details"),
};
