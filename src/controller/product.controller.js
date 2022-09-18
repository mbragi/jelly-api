const mongoose = require("mongoose");
// const ObjectId = mongoose.Types.ObjectId;
const { Category } = require("../models/catergory.model");
const { Product } = require("../models/product.model");

async function createCategory(req, res, next) {
  try {
    //create and save category
    let { categoryName } = req.body;
    if (!req.body) {
      res.status(400).json({
        message: "category needed",
        type: "error",
      });
      return;
    } else {
      const category = await Category.findOne(
        { categoryName },
        { categoryName }
      );
      if (category) {
        res.status(200).json({
          message: "successful",
          data: category,
        });
        return;
      }
      const newCategory = await new Category({
        categoryName,
      }).save();
    }
    const allData = await Category.find({ categoryName });
    res.status(200).json({
      message: "successfully Created",
      data: allData,
    });
  } catch (error) {
    res.status(400).json({
      message: `catch ${error.message}`,
    });
    console.log(`${error.message}`);
  }
}

async function createProduct(req, res) {
  try {
    //create and save product
    let { category_id, name, img, price, rating } = req.body;
    // console.log(category_id);
    if (!category_id) {
      res.status(400).json({
        message: "category not sent",
        type: "error",
      });
      return;
    } else {
      if (!(name && img && price && rating)) {
        res.status(400).json({
          message: "All products fields required!",
          type: "error",
        });
        return;
      }
      const product = await new Product({
        ...req.body,
      }).save();
      const allData2 = await Product.findOne({ ...req.body });
      res.status(201).json({
        message: "created successfully",
        data: allData2,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: `catch::: ${error.message}`,
    });
  }
}

async function getAllProductsByCategory(req, res) {
  let { _id } = req.body;
  try {
    if (!_id) {
      res.status(203).json({
        message: "Select A Categories",
      });
      return;
    }
    const data = await Category.findById({ _id });
    // console.log(data._id);
    let category_id = _id;
    const productData = await Product.find({ category_id });
    if ((data._id = productData[0].category_id)) {
      res.status(200).json({
        message: "successful",
        data: productData,
      });
    }
    // console.log(productData[0].category_id);
  } catch (error) {
    res.status(400).json({
      message: `catch::${error.message}`,
    });
    console.log(error.message);
  }
}

async function getAllProducts(req, res) {
  const data = await Category.find({});
  console.log(data);
}

module.exports = {
  createCategory,
  createProduct,
  getAllProducts,
  getAllProductsByCategory,
};
