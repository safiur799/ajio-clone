const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");

router.post("/", async function (req, res) {
  try {
    const product = await Product.insertMany(req.body);
    return res.send(product);
  } catch (err) {
    return res.send(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const product = await Product.find().lean().exec();
    res.render("products/allProducts.view.ejs", {
      product: product,
    });
  } catch (err) {
    return res.send(err.message);
  }
});

module.exports = router;
