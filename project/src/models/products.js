const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    img: String,
    category: String,
    brand: String,
    details: String,
    price: Number,
  },
  {
    versionKey: false,
  }
);

const Product = mongoose.model("user", productSchema);

module.exports = Product;
