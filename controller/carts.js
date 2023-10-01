const Cart = require('../model/carts.js');
const getcart = async (req, res) => {
   const cart= await Cart.find({userId:req.body.userId}).populate("productId");
  
    res.json({
        cart
    })
}
const addcart = async (req, res) => {
    const { userId, productId } = (req.body);
    const cart = new Cart({userId,productId});
    const result= await cart.save();

    res.json({
        status: false,
        result
    })
}
const deletecart=async (req,res) =>{
   const userId=req.body.userId;
   const id=req.body.id;
    const deleted= await Cart.findByIdAndDelete({userId:userId,_id:id})
    
    res.json({
        deleted
    })
}
module.exports = { getcart, addcart,deletecart };