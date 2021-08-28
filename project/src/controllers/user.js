const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());
const User = require("../models/users.model");

router.get("/create", async (req, res) => {
  return res.render("products/user.singin.ejs");
});

router.post("/add", async (req, res) => {
  const user = await User.create(req.body);
  return res.send(user);
});

module.exports = router;
