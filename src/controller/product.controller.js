const mongoose = require("mongoose");
const { Category } = require("../models/catergory.model");
const { Product } = require("../models/product.model");
const jwt = require("jsonwebtoken");

async function createCategory(req, res, next) {
  try {
    //create and save category
    let { name } = req.body;
    if (!name) {
      res.status(400).json({
        message: "category needed",
        type: "error",
      });
      return;
    } else {
      const category = await Category.findOne({ name }, { name });
      if (category) {
        res.status(200).json({
          message: "successful",
          data: category,
        });
        return;
      }
      const newCategory = await new Category({
        ...req.body,
      }).save();
    }
    const allData = await Category.find({ name });
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
    let { category_id, name, img, price } = req.body;
    // console.log(category_id);
    if (!category_id) {
      res.status(400).json({
        message: "category not sent",
        type: "error",
      });
      return;
    } else {
      if (!(name && img && price)) {
        res.status(400).json({
          message: "All products fields required!",
          type: "error",
        });
        return;
      }
      const product = await new Product({
        ...req.body,
      });
      await product.save();
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
  if (!_id) {
    res.status(203).json({
      message: "Select A Categories",
    });
    return;
  }
  try {
    const categoryData = await Category.findById({ _id });
    // console.log(data._id);
    let category_id = _id;
    const productData = await Product.find({ category_id });
    res.status(200).json({
      message: "successful",
      data: productData,
      data2: categoryData,
    });
    return;

    // console.log(productData[0].category_id);
  } catch (error) {
    res.status(400).json({
      message: `catch::${error.message}`,
    });
    console.log(error.message);
  }
}

async function getAllCategory(req, res) {
  const data = await Category.find({});
  const data2 = await Product.find({});
  res.status(200).json({
    message: "successful",
    Cdata: data,
    Pdata: data2,
  });
  // console.log(data);
}

async function getProduct(req, res) {
  let { id } = req.params;
  if (!id) {
    res.status(400).json({
      message: "invalid request",
    });
    return;
  }
  try {
    const verifiedProduct = await Product.findOne({ _id: id });
    if (verifiedProduct === null) {
      res.status(404).json({
        message: "Product not found",
      });
      return;
    }
    res.status(200).json({
      message: " successful",
      data: verifiedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: `catch:: ${error.message}`,
    });
  }
}

module.exports = {
  createCategory,
  createProduct,
  // verifyProduct,
  getProduct,
  getAllCategory,
  getAllProductsByCategory,
};
