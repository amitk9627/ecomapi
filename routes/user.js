const express=require('express');
const router=express.Router();
const {login,register,logout}=require('../controller/user.js');
router.get("/register", register)
router.get("/login", login)
router.get("/logout", logout)

module.exports=router;