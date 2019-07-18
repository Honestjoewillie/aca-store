const express = require('express')
let products = require("./products2");
const app = express()
let myproducts = [{"name": "joe"}];
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static('public'));
 
app.get('/products', function (req, res) {
  res.json(products)
})

app.listen(3000)