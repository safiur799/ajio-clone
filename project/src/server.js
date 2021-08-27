const express = require("express");
const mongoose = require("mongoose");
const connect = require("./configs/db");
const app = express();
const Product = require("./models/products");

app.listen(3001, async () => {
  await connect();
  console.log("port 3007");
});
