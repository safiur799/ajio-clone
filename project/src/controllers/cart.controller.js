const express = require("express");
const router = express.Router();
const Cart = require("../models/cart");
router.get("/", async (req, res) => {
  res.send("/products/shop.ejs", {
    Cart: Cart,
  });
});
