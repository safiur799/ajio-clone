const express = require("express");
const connect = require("./configs/db");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static("public"));

const Productcontrol = require("./controllers/product.cont");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/products", Productcontrol);
app.listen(3001, async () => {
  await connect();
  console.log("port 3001");
});
