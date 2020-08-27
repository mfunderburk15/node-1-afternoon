const express = require('express')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

console.log(getProducts)
console.log(getProduct)

const app = express()
const SERVER_PORT = 4001

app.get('/api/products', getProducts.getProducts)

app.get('/api/product/:id', getProduct.getProduct)

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))