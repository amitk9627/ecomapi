const Products = require('../model/products.js');
const getProducts = async (req, res) => {
    const id=req.query.id 
    const pageNo=Number(req.query.pageNo || "");
    const pageSize= pageNo ? Number(req.query.pageSize || 10)  :  0;
    const skip=(pageNo-1)*pageSize;

    const query =id ? { _id: id} : {};

    const total=await Products.find(query).count();
    const productsList = await Products.find(query).skip(skip).limit(pageSize);

    res.json({
        status: true,
        total:total,
        pageNo:pageNo,
        productsList
    })

}
const searchProducts = async (req, res) => {
    
    const title =req.params.title;
    const productsList = await Products.find( { title: {$regex: title, $options: 'i' } });

    res.json({
        status: true,
        productsList
    })
}
module.exports = {
    getProducts,searchProducts
}