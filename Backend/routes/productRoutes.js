const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  getCartById,
  getWishItemById,
} = require("../controller/productControllers");

router.get("/", getProducts);
router.get("/:id", getProductById);
router.get("/cartItems", getCartById);
router.get("/wishlist", getWishItemById);

module.exports = router;
