const express = require("express");
const connect = require("./configs/db");
const app = express();

app.listen(3001, async () => {
  await connect();
  console.log("port 3007");
});
