const Products = require('../model/products.js');
const getProducts = async (req, res) => {
    // const query=;
    const productsList = await Products.find({title: {$regex: /^ip/i}});
   
    res.json({
        status: true,
        productsList
    })
   
}
module.exports = {
    getProducts
}