const express=require('express');
const app=express();
require('dotenv').config();

const userRoutes= require('./routes/user.js');
const productsRoutes=require('./routes/products.js');
const cartRouters=require('./routes/carts.js');

const authMiddleware=require('./authMiddleware/auth.js');
app.use(express.json());
app.use("/users",userRoutes);
app.use("/products",productsRoutes);
app.use("/carts",authMiddleware,cartRouters);


module.exports=app;