const { getProducts } = require('../controller/products.js');
const express=require('express');
const router=express.Router();

router.get('/products',getProducts);
module.exports=router;