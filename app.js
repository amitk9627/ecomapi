const express=require('express');
const app=express();
require('dotenv').config()
const userRoutes= require('./routes/user.js');
const productsRoutes=require('./routes/products.js');
const cartRouters=require('./routes/carts.js');
app.use(express.json());
app.use(userRoutes);
app.use(productsRoutes);
app.use(cartRouters);


module.exports=app;