require("dotenv").config();

const productData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/Product");
const Cart = require("./models/Cart");
const WishList = require("./models/wishList");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productData);

    await Cart.deleteMany({});

    await Cart.insertMany(productData);

    await WishList.deleteMany({});

    await WishList.insertMany(productData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();
