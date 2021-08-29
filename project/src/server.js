const express = require("express");
const ejs=require('ejs')
const app = express();

app.use(express.static('public'));

app.set('view engine','ejs')


app.get('/', (req, res) => {
  res.render('./pages/index')
})

app.get('/products', (req, res) => {
  // res.render('./pages/products')
  return res.render("./pages/products");
})

app.get('/american', (req, res) => {
  res.render('./pages/american')
})

app.get('/index', (req, res) => {
  res.render('./pages/index')
})

app.get('/cart', (req, res) => {
  res.render('./pages/cart')
})

app.get('/delivery', (req, res) => {
  res.render('./pages/delivery')
})

app.get('/payment', (req, res) => {
  res.render('./pages/payment')
})

app.get('/thanks', (req, res) => {
  res.render('./pages/thanks')
})

app.get('/customer', (req, res) => {
  res.render('./pages/customer')
})

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

// return res.render("products", {
//   products: products,
//   link: link,
// }); 