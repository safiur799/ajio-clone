const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    details: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
