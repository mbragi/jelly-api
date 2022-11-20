const { Banner } = require("../models/banner.model");
const { Carousel } = require("../models/carousel.model");

async function httpCreateAndUpdateBanner(req, res) {
  let { photoUrl } = req.body;
  try {
    if (!photoUrl) {
      res.status(400).json({
        message: "cannot process request!",
        success: false,
      });
      return;
    }
    const newBanner = new Banner({
      ...req.body,
    });
    await newBanner.save();
    res.status(201).json({
      message: "successfully created",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
      type: "server error",
    });
  }
}
async function httpCreateHomepage(req, res) {
  try {
    const newHomepage = new Carousel({
      ...req.body,
    });
    await newHomepage.save();
    httpGetHomepage(req, res);
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
      type: "server error",
    });
  }
}
async function httpGetHomepage(req, res) {
  const data = await Carousel.find({});
  res.status(200).json({
    message: "success",
    data: data,
    success: true,
  });
}
async function httpGetBanner(req, res) {
  const data = await Banner.find({});
  res.status(200).json({
    message: "success",
    data: data,
  });
}
module.exports = {
  httpCreateAndUpdateBanner,
  httpCreateHomepage,
  httpGetBanner,
  httpGetHomepage,
};
