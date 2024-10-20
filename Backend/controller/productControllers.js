const Product = require("../models/Product");
const Cart = require("../models/Cart");
const WishList = require("../models/wishList")

const getProducts = async (req, res) => {
  try {
    const min =
      req.query.min && Number(req.query.min) !== 0 ? Number(req.query.min) : 0;
    const max =
      req.query.max && Number(req.query.max) !== 0 ? Number(req.query.max) : 0;

    const priceFilter = min && max ? { price: { $gte: min, $lte: max } } : {};
    const order = req.query.order || "";
    const sortOrder =
      order === "lowest"
        ? { price: 1 }
        : order === "highest"
        ? { price: -1 }
        : { _id: -1 };
    const products = await Product.find({ ...priceFilter }).sort(sortOrder);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getCartById = async (req, res) => {
  const cart = await Cart.findById(req.params.id);
  if (cart) {
    res.json(cart);
  } else {
    res.status(404);
    throw new Error("No Cart Items");
  }
};

const getWishItemById = async (req, res) => {
  const wishlist = await WishList.findById(req.params.id);
  if (wishlist) {
    res.json(wishlist);
  } else {
    res.status(404);
    throw new Error("No Cart Items");
  }
};

module.exports = {
  getProducts,
  getProductById,
  getCartById,
  getWishItemById
};
