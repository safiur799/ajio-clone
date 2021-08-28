const express = require("express");
const Product = require("../models/products.model");
const router = express.Router();

router.post("/", async (req, res) => {
  const product = await Product.create(req.body);
  return res.send(product);
});
router.get("/", async (req, res) => {
  const data = await Product.find().lean().exec();
  return res.render("products", {
    data: data,
  });
});

module.exports = router;
