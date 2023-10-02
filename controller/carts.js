const Cart = require('../model/carts.js');

const getcart = async (req, res) => {
    const cart = await Cart.find({ userId: req.user._id }).populate("productId").select("productId");
    res.json({
        cart
    })
}
const addcart = async (req, res) => {
    const userId = req.user._id;
    const { productId } = (req.body);
    const cart = new Cart({ userId, productId });
    const result = await cart.save();

    res.json({
        status: false,
        message:"product added successfully "+productId
    })
}
const deletecart = async (req, res) => {
    const userId = req.user._id;
    const id = req.body.id;
    const deleted = await Cart.findByIdAndDelete({ userId: userId, _id: id });
    res.json({
        status:"success",
        message:"Item deleted successfully",
        deleted
    })
}
module.exports = { getcart, addcart, deletecart };