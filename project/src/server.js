//mongo password gaG7TGOfExLZ0qls
//user name safiur
//mongo connecttion    mongodb+srv://safiur:<password>@cluster0.eddad.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const path = require("path");
const express = require("express");
const connect = require("./config/db");
const productController = require("./controllers/product.controller");
const userController = require("./controllers/user");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/products", productController);
app.use("/user", userController);
app.listen(3002, async () => {
  await connect();
  console.log("port 3001kshih");
});
