const { Schema, model } = require("mongoose");
const carousel = new Schema(
  {
    img_main: {
      type: String,
      // ref: "banners",
    },
    img_one: {
      type: String,
      // required: true,
    },
    img_two: {
      type: String,
    },
    img_three: {
      type: String,
    },
    img_four: {
      type: String,
    },
    about_details: {
      type: String,
    },
    advert_details: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = { Carousel: model("carousel", carousel) };
