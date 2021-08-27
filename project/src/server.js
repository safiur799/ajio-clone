const express = require("express");
const ejs=require('ejs')
const app = express();

app.use(express.static('public'));

app.set('view engine','ejs')


app.get('/', (req, res) => {
  res.render('./pages/index')
})

app.get('/products', (req, res) => {
  res.render('./pages/products')
})

app.get('/american', (req, res) => {
  res.render('./pages/american')
})

app.get('/index', (req, res) => {
  res.render('./pages/index')
})

app.listen(3000, () => {
  console.log("Listening on port 3000");
});