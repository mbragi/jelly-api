const mongoose = require("mongoose");
const { Category } = require("../models/category.model");
const { Product } = require("../models/product.model");
const { Detail } = require("../models/details.model");

// const jwt = require("jsonwebtoken");

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
  //create and save product
  let { category_id, name, img, price } = req.body;
  // console.log(category_id);
  if (!category_id) {
    res.status(400).json({
      message: "Unable to, select a category",
      type: "error",
    });
    return;
  }
  try {
    const getName = await Category.findById({ _id: category_id });
    if (!(name && img && price)) {
      res.status(400).json({
        message: "All products fields required!",
        type: "error",
      });
      return;
    }
    await Product.deleteMany();
    const product = await new Product({
      ...req.body,
      category_name: getName.name,
    });
    await product.save();
    const allData2 = await Product.findOne({ ...req.body });
    res.status(201).json({
      message: "created successfully",
      data: allData2,
    });
  } catch (error) {
    res.status(400).json({
      message: `catch::: ${error.message}`,
    });
  }
}

// async function getAllProductsByCategory(req, res) {
//   let { _id } = req.body;
//   if (!_id) {
//     res.status(203).json({
//       message: "Select A Categories",
//     });
//     return;
//   }
//   try {
//     const categoryData = await Category.findById({ _id });
//     // console.log(data._id);
//     let category_id = _id;
//     const productData = await Product.find({ category_id });
//     res.status(200).json({
//       message: "successful",
//       data: productData,
//       data2: categoryData,
//     });
//     return;

//     // console.log(productData[0].category_id);
//   } catch (error) {
//     res.status(400).json({
//       message: `catch::${error.message}`,
//     });
//     console.log(error.message);
//   }
// }

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
async function httpGetCategories(req, res) {
  const data = await Category.find({});
  res.status(200).json({
    message: "successful",
    data: data,
  });
  // console.log(data);
}
async function httpGetDetails() {
  const details = await Detail.find({});
  res.status(200).json({
    message: " success!!!",
  });
}
async function httpCreateDetails(req, res) {
  let { product_id } = req.body;
  if (!product_id) {
    res.status(400).json({
      message: "Bad request",
    });
    return;
  }
  try {
    const find_type = await Product.findById({ _id: product_id });
    if (find_type) {
      type = find_type.name;
      specifications = find_type._id;
      const detail = await new Product({
        ...req.body,
        type,
        specifications,
      });
      await detail.save();
      await httpGetDetails(req, res);
    }
    res.status(404).json({
      message: "unable to Create product",
    });
  } catch (error) {
    res.status(400).json({
      message: `catch::: ${error.message}`,
    });
  }
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
  // getAllProductsByCategory,
  httpCreateDetails,
  httpGetCategories,
};
