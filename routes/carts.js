const express=require('express');
const router=express.Router();

const {getcart,addcart,deletecart} = require('../controller/carts.js');

router.get('/cartList',getcart);

router.patch('/addCart' , addcart);
router.delete('/deleteCart',deletecart);

module.exports=router;