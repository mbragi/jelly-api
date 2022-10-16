const mongoose = require("mongoose");
const dotenv = require("dotenv");
const products = require("./src/data/products.json");
// const NCM = require("./src/data/Ncm.json");
// const LFP = require("./src/data/LFP.json");

const category = require("./src/data/category.json");
const { Product } = require("./src/models/product.model");
const { Category } = require("./src/models/category.model");
const { Cart } = require("./src/models/cart.model");
const { Order } = require("./src/models/order.model");
const { mongoConnect } = require("./src/services/db");
const { Detail } = require("./src/models/detail.model");
// const { Detail } = require("./src/models/detail.model");

dotenv.config();

mongoConnect();

const importData = async () => {
  try {
    await Product.deleteMany();
    // await Category.deleteMany();
    // await Cart.deleteMany();
    // await Order.deleteMany();
    // const createdCategories = await Category.insertMany(category);
    // const getFirstCategory = createdCategories[0]._id;

    const firstSampleProducts = products.map((product) => {
      return { ...product, category_id: "634c6f6903e11e1c9b55ed2f" ,category_name:"NCM"};
    });
    await Product.insertMany(firstSampleProducts);

    // const getSecondCategory = createdCategories[1]._id;

    // const secondSampleProducts = products.map((product) => {
    //   return { ...product, category_id: getSecondCategory };
    // });
    // await Product.insertMany(secondSampleProducts);
    // const getData = await Product.find({ name: "NCM" });
    // const getId = getData.map((item) => {
    //   return { ...item, detail: NCM };
    // });
    // await Product.insertMany(getId);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();
    await Category.deleteMany();
    await Cart.deleteMany();
    await Order.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
