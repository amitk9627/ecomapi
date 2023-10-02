const { getProducts ,searchProducts} = require('../controller/products.js');
const express=require('express');
const router=express.Router();

router.get('/allproducts',getProducts);
router.get('/allproducts/:title',searchProducts)
module.exports=router;